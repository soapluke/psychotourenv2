import { Box } from "@mantine/core";

const Card = ({ children }) => {
  return (
    <Box
      sx={() => ({
        backgroundColor: "#F6FFF8",
        textAlign: "center",
        padding: "1rem",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 10px",
        },
      })}
    >
      {children}
    </Box>
  );
};

export default Card;
