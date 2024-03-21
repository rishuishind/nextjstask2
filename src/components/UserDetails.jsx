'use client'

import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserDetails = ({ users }) => {
    const router = useRouter();
    const handleUserClick = (user) => {
        router.push(`/users/${user.id}`)
    }
    return (
        <div>
            {users.map((user) => (<React.Fragment key={user.id}>
                <ListItem onClick={() => handleUserClick(user)} alignItems="flex-start" className="overflow-hidden">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={user.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={user.Bio}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {user.profile.firstName}
                                </Typography>
                                {`: ${user.jobTitle}`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="base" />
            </React.Fragment>))}
        </div>
    )
}

export default UserDetails