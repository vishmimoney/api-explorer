import React, { Component } from "react";

class BlogDetails extends Component {
    render() {
        return (
            <>
                <div class="row">
                    <div class="col s12 m12">
                        <h4>Posts</h4>
                    </div>
                    <div class="col s12 m12">
                        <div class="divider"></div>
                        <div class="section">
                            <h5>Title</h5>
                            <ul class="collection">
                                <li class="collection-item">Headline: this is the headline</li>
                                <li class="collection-item">Body Text: this is the body</li>
                            </ul>
                        </div>
                        <div class="section">
                            <h5>Authors</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Tagline</th>
                                        <th>Tags</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                        <td>$0.87</td>
                                    </tr>
                                    <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                        <td>$3.76</td>
                                        <td>$0.87</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="section">
                            <h5>Comments</h5>
                            <ul class="collection">
                                <li class="collection-item">this is the comment 1</li>
                                <li class="collection-item">this is the comment 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
        ;
    }
}

export default BlogDetails;