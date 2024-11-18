export const ROOM_PRICES = {
  Standard: 23000,
  Executive: 30000,
  "Super Executive": 50000,
};

export const calculateTotalPrice = (rooms) => {
  if (!Array.isArray(rooms)) return 0;

  return rooms.reduce((total, room) => {
    if (!room?.roomType || !room?.checkInDate || !room?.checkOutDate) {
      return total;
    }

    const nights = Math.ceil(
      (new Date(room.checkOutDate) - new Date(room.checkInDate)) /
        (1000 * 60 * 60 * 24)
    );

    const roomPrice = ROOM_PRICES[room.roomType] * nights;

    return total + roomPrice;
  }, 0);
};

export const calculateTotalGuests = (rooms) => {
  if (!Array.isArray(rooms)) return 0;
  return rooms.reduce((total, room) => total + (room?.guests || 0), 0);
};

export const calculateRoomPrice = (room) => {
  if (!room?.roomType || !room?.checkInDate || !room?.checkOutDate) {
    return 0;
  }

  const nights = Math.ceil(
    (new Date(room.checkOutDate) - new Date(room.checkInDate)) /
      (1000 * 60 * 60 * 24)
  );

  return ROOM_PRICES[room.roomType] * nights;
};
