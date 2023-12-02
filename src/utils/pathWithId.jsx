export const pathWithId = (id, childrenFav) => {
    switch (childrenFav) {
      case "favRiders":
        return `/motogp/riders/${id}`;
      case "favCircuits":
        return `/motogp/circuits/${id}`;
      case "favPodiums":
        return `/users/${id}`;
      case "favPlayers":
        return `/fifa/players/${id}`;
      case "favTeams":
        return `/fifa/teams/${id}`;
      case "favElevens":
        return `/users/${id}`;
      case "favLifters":
        return `/powerlifting/lifters/${id}`;
      case "favWeightCategories":
        return `/powerlifting/weight/${id}`;

      default: return `/profile`
    }
  };