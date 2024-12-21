import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs'

export default async function Auth() {
    return <>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </>
}