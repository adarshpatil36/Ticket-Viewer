import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TicketItem from "../components/TicketItem";

describe("TicketItem testing", () => {
  const mockData = {
    url: "https://zendeskcodingchallenge9546.zendesk.com/api/v2/requests/4.json",
    id: 4,
    status: "open",
    priority: null,
    type: null,
    subject: "Test ticket #2",
    description: "This is test ticket #2",
    organization_id: 1500628004841,
    via: {
      channel: "api",
      source: {
        from: {},
        to: {},
        rel: null,
      },
    },
    custom_fields: [],
    requester_id: 1909839417125,
    collaborator_ids: [],
    email_cc_ids: [],
    is_public: true,
    due_at: null,
    can_be_solved_by_me: true,
    created_at: "2021-11-20T10:48:58Z",
    updated_at: "2021-11-20T10:48:58Z",
    recipient: null,
    followup_source_id: null,
    assignee_id: 1909839417125,
    ticket_form_id: 1500003279781,
    fields: [],
  };
  it("renders TicketItem component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <TicketItem item={mockData} onItemClick={() => {}}></TicketItem>,
      div
    );
  });

  it("renders TicketItem with proper label", () => {
    const { queryByLabelText } = render(
      <TicketItem item={mockData} onItemClick={() => {}}></TicketItem>
    );
    expect(queryByLabelText).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<TicketItem item={mockData} onItemClick={() => {}}></TicketItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
