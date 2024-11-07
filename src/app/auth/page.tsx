import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs'

export default function Auth() {
    return <>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </>
}