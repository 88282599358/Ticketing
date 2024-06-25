import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get Ticket");
    }

    return res.json();

  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const edit = params.id === "new" ? false : true;

  if (edit) {
    updateTicketData = await getTicketById(params.id);
    // console.log(updateTicketData)
    updateTicketData = updateTicketData.foundTicket;
  } 
  else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData}/>;
};

export default TicketPage;
