import {
    GET_PROFILE,
    GET_AVAILABILITIES,
} from "../graphql/queries/profile.query";
import { useQuery, useLazyQuery } from "@apollo/client";
// import { useParams } from "react-router-dom";
// import {  useEffect } from "react";
import { Circle, CircleHalfVertical } from "tabler-icons-react";

const Profile = () => {
    const { id } = useParams();
    console.log(id);
    const seniorId = "62b45116fc13ae56f1000275";
    // la requete pour les juniors disponible
    const [
        handleAvailabilities,
        { data: newData, loading: newLoading, error: newError },
    ] = useLazyQuery(GET_AVAILABILITIES);
    if (newError) {
        console.log(newError.message);
    }
    if (newLoading) {
        console.log("loading");
    }
    // useEffect(() => {
    //     console.log("newData", newData);
    // }, [newData]);

    const { data, loading, error } = useQuery(GET_PROFILE, {
        variables: {
            id: seniorId,
        },
    });
    if (error) {
        return <div>Une erreur s'est produite</div>;
    }

    return (
        <div>
            {loading ? (
                <div>loading</div>
            ) : (
                <div>
                    profile page senior
                    <h4>
                        {data?.getProfile.firstname} {data?.getProfile.lastname}
                    </h4>
                    <ul>
                        <li>type: {data?.getProfile.type}</li>
                        <li>email: {data?.getProfile.email}</li>
                        <li>dateOfBirth: {data?.getProfile.dateOfBirth}</li>
                        <li>adress: {data?.getProfile.address}</li>
                        <li>bio: {data?.getProfile.bio}</li>
                        <li>preferences: {data?.getProfile.preferences[0]}</li>
                        <li>
                            personalRecipes:{" "}
                            {data?.getProfile.personalRecipes[0]}
                        </li>
                        <li>hobbies: {data?.getProfile.hobbies[0]}</li>
                    </ul>
                    <img src={data?.getProfile.photo} alt="profil pic" />
                    {/* exemple de lazyquery avec variable dynamique  */}
                    <button
                        onClick={() => {
                            handleAvailabilities({
                                variables: { getAvailabilitiesId: seniorId },
                            });
                        }}
                    >
                        availabilities
                    </button>
                    {/* **************** les availabilities **************** */}
                    {newError && <div>Une erreur est survenue.</div>}
                    {newData && (
                        <div>
                            {newData.getAvailabilities.map((item) => {
                                return (
                                    <div key={item._id}>
                                        <div
                                            onClick={() =>
                                                console.log(
                                                    "===>",
                                                    item.juniorId
                                                )
                                            }
                                        >
                                            <div>adresse : {item.address}</div>
                                            {item.availability.map(
                                                ({ date, period }, index) => {
                                                    let today = new Date();
                                                    let shownDate = new Date(
                                                        date
                                                    )
                                                        .toISOString()
                                                        .split("T")[0];
                                                    return (
                                                        <div key={index}>
                                                            <div>
                                                                date:{" "}
                                                                {shownDate}
                                                            </div>
                                                            <div>
                                                                creneau horaire
                                                                : {period}
                                                            </div>
                                                            {new Date(date) >
                                                            today ? (
                                                                <Circle
                                                                    size={40}
                                                                    strokeWidth={
                                                                        3
                                                                    }
                                                                    color={
                                                                        "#44bf40"
                                                                    }
                                                                />
                                                            ) : (
                                                                <CircleHalfVertical
                                                                    size={40}
                                                                    strokeWidth={
                                                                        3
                                                                    }
                                                                    color={
                                                                        "#B2B2B2"
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Profile;
