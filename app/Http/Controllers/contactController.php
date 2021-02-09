<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class contactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();
        return response()->json(['status' => 200, 'contacts' => $contacts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $newContact = Contact::create([
        //     'fullname' => $request->fullName,
        //     'email' => $request->email,
        //     'phone' => $request->phone,
        //     'provider_id' => $request->provider_id,
        // ]);
        // if ($newContact) {
        //     return response()->json(['status' => 200]);
        // } else {
        //     return response()->json('doesnt work!');
        // }

        $newContact = new Contact();
        $newContact->fullname = $request->fullName;
        $newContact->email = $request->email;
        $newContact->phone = $request->phone;
        $newContact->provider_id = $request->provider_id;
        $contact_save = $newContact->save();
        if ($contact_save) {
            return response()->json(['contact' => $newContact, 'status' => 200]);
        } else {
            return response()->json(['contact' => 'ERROR WHILE SAVING contact!', 'status' => 400]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $contact = Contact::find($id);
        return response()->json(['status' => 200, 'contact' => $contact]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->fullname = $request->fullName;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        if($contact->save()){
            return response()->json(['status' => 200]);
        } else {
            return response()->json($contact);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if($contact->delete()){
            return response()->json(['status' => 200]);
        }
    }
}
