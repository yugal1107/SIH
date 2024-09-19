// import { v4 as uuidv4 } from 'uuid';
// import { NextResponse } from 'next/server';

// let dataStore = {};

// export async function POST(req) {
//   const id = uuidv4();
//   const body = await req.json();
//   dataStore[id] = body;
//   return NextResponse.json({ id });
// }

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get('id');
//   const data = dataStore[id];
//   if (data) {
//     return NextResponse.json(data);
//   } else {
//     return NextResponse.json({ error: 'Data not found' }, { status: 404 });
//   }
// }

// src/app/api/storeData/route.js
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { saveComplaint, getComplaint } from "@/lib/data";

export async function POST(req) {
  const id = uuidv4();
  const body = await req.json();
  saveComplaint(id, body);
  return NextResponse.json({ id });
}

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }
  const data = getComplaint(id);
  if (data) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: "Data not found" }, { status: 404 });
  }
}
