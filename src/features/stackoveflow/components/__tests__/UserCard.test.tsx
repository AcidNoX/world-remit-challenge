import { act, fireEvent, render } from "@testing-library/react-native";
import { testIds } from "features/stackoveflow/test-ids";
import { UserModel } from "features/stackoveflow/types/user.model";
import React from "react";
import { UserCard } from "../user-card/index";

const user: UserModel = {
  badge_counts: {
    bronze: 9046,
    silver: 8922,
    gold: 822,
  },
  account_id: 11683,
  is_employee: false,
  last_modified_date: 1653082500,
  last_access_date: 1653132796,
  reputation_change_year: 28031,
  reputation_change_quarter: 9834,
  reputation_change_month: 4122,
  reputation_change_week: 1280,
  reputation_change_day: 70,
  reputation: 1332888,
  creation_date: 1222430705,
  user_type: "registered",
  user_id: 22656,
  accept_rate: 86,
  location: "Reading, United Kingdom",
  website_url: "http://csharpindepth.com",
  link: "https://stackoverflow.com/users/22656/jon-skeet",
  profile_image:
    "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
  display_name: "Jon Skeet",
};

describe("UserCard tests", () => {
  it("Should render a user's name", () => {
    const { getByTestId } = render(<UserCard user={user} />);

    const name = getByTestId(testIds.userCard.name);
    expect(name.props.children).toBe(user.display_name);
  });

  it("Should render a user's location", () => {
    const { getByTestId } = render(<UserCard user={user} />);

    const name = getByTestId(testIds.userCard.location);
    expect(name.props.children).toBe(user.location);
  });

  it("Should show actions when pressed", () => {
    const { getByTestId } = render(<UserCard user={user} />);

    const card = getByTestId(testIds.userCard.pressable);
    act;
    fireEvent.press(card);

    const follow = getByTestId(testIds.userCard.actions);

    expect(follow).toBeTruthy();
  });

  it("Should show a followed badge when followed is pressed", () => {
    const { getByTestId } = render(<UserCard user={user} />);

    const card = getByTestId(testIds.userCard.pressable);
    fireEvent.press(card);

    const follow = getByTestId(testIds.userCard.follow);
    fireEvent.press(follow);

    const followed = getByTestId(testIds.userCard.followed);
    expect(followed).toBeTruthy();
  });

  it("Should hide a followed badge when unfollow is pressed", () => {
    const { getByTestId, queryByTestId } = render(<UserCard user={user} />);

    const card = getByTestId(testIds.userCard.pressable);
    fireEvent.press(card);

    const follow = getByTestId(testIds.userCard.follow);
    fireEvent.press(follow);
    fireEvent.press(card);

    expect(queryByTestId(testIds.userCard.followed)).not.toBeNull();

    const unfollow = getByTestId(testIds.userCard.unfollow);
    fireEvent.press(unfollow);

    expect(queryByTestId(testIds.userCard.followed)).toBeNull();
  });

  it("Should hide actions when followed is pressed", () => {
    const { getByTestId, queryByTestId } = render(<UserCard user={user} />);

    const card = getByTestId(testIds.userCard.pressable);
    fireEvent.press(card);

    const follow = getByTestId(testIds.userCard.follow);
    fireEvent.press(follow);

    const actions = queryByTestId(testIds.userCard.actions);
    expect(actions).toBeNull();
  });

  it("Should show a blocked badge when block is pressed", () => {
    const { getByTestId } = render(<UserCard user={user} />);

    const card = getByTestId(testIds.userCard.pressable);
    fireEvent.press(card);

    const block = getByTestId(testIds.userCard.block);
    fireEvent.press(block);

    const blocked = getByTestId(testIds.userCard.blocked);
    expect(blocked).toBeTruthy();
  });

  it("Should hide actions when block is pressed", () => {
    const { getByTestId, queryByTestId } = render(<UserCard user={user} />);

    const card = getByTestId(testIds.userCard.pressable);
    fireEvent.press(card);

    const block = getByTestId(testIds.userCard.block);
    fireEvent.press(block);

    const actions = queryByTestId(testIds.userCard.actions);
    expect(actions).toBeNull();
  });

  it("Should not show actions if blocked", () => {
    const { getByTestId, queryByTestId } = render(<UserCard user={user} />);

    const card = getByTestId(testIds.userCard.pressable);
    fireEvent.press(card);

    const block = getByTestId(testIds.userCard.block);
    fireEvent.press(block);
    fireEvent.press(card);

    const actions = queryByTestId(testIds.userCard.actions);

    expect(actions).toBeNull();
  });
});
