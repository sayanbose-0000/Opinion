import { auth } from "../../auth";

const session = await auth();
const user = session?.user;

export { user };