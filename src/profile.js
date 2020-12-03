import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    capitalizeFirstLetter = (string) => {
        if (string) {
            const arrayString = typeof string;
            let newObject = [];
            if (arrayString === 'object') {
                for (let i = 0; i < string.length; i++) {
                    const element = string[i];
                    newObject.push(element.charAt(0).toUpperCase() + element.slice(1));
                }
                return newObject;
            } else {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        }
    };

    render() {
        return (
            this.props.isLoading
                ? < div className="spinner-border text-primary spinnner"></div>
                : <div className="mt-5">
                    {this.props.user.name ? <div>
                        <h5>Name :</h5>
                        <h3>{this.capitalizeFirstLetter(this.props.user.name)}</h3>
                    </div> : null}
                    {this.props.user.email ? <div>
                        <h5>Email :</h5>
                        <h3>{this.props.user.email}</h3>
                    </div> : null}
                    {this.props.user.repo ? <div>
                        <h5>Visit Repo :</h5>
                        <h3><a href={this.props.user.repo} rel="noreferrer" target='_blank'>{this.props.user.repo}</a></h3>
                    </div> : null}
                    {this.props.user.image ? <div className="custome_image">
                        <h5>Image :</h5>
                        <img src={this.props.user.image} alt="" />
                    </div> : null}
                </div>
        );
    }
}

export default Profile;
