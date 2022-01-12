//libraries
import { useState, useEffect } from "react";

export function useInfo(apiLink) {
  const [state, setState] = useState({
    status: "pending",
    info: null,
    error: null,
  });
  const { status, error, info } = state;

  useEffect(() => {
    setState({ status: "pending" });

    if (typeof apiLink !== "string") {
      return setState({
        status: "error",
        error: "The link you provide to useInfo should be of 'string' type",
      });
    }

    fetch(apiLink)
      .then((response) => response.json())
      .then(
        (data) => setState({ status: "resolved", info: data }),
        (error) => setState({ status: "error", error })
      );
  }, []);

  if (status === "pending") return "Fetching information";
  if (status === "error") throw error;
  if (status === "resolved") return info;
}
