import { render } from "@testing-library/react-native";
import { testIds } from "features/stackoveflow/test-ids";
import React from "react";
import {
  UserCardReputation,
  UserCardReputationProps,
} from "../user-card/UserCardReputation";

describe("UserCardAvatar tests", () => {
  it("Should render reputation", () => {
    const props: UserCardReputationProps = {
      reputation: 1,
      gold: 1,
      silver: 2,
      bronze: 3,
    };

    const { getByTestId } = render(<UserCardReputation {...props} />);

    expect(
      getByTestId(testIds.userCardReputation.reputation).props.children
    ).toEqual(props.reputation);
  });

  it("Should render gold", () => {
    const props: UserCardReputationProps = {
      reputation: 1,
      gold: 1,
      silver: 2,
      bronze: 3,
    };

    const { getByTestId } = render(<UserCardReputation {...props} />);

    expect(getByTestId(testIds.userCardReputation.gold).props.children).toEqual(
      props.gold
    );
  });

  it("Should render silver", () => {
    const props: UserCardReputationProps = {
      reputation: 1,
      gold: 1,
      silver: 2,
      bronze: 3,
    };

    const { getByTestId } = render(<UserCardReputation {...props} />);

    expect(
      getByTestId(testIds.userCardReputation.silver).props.children
    ).toEqual(props.silver);
  });

  it("Should render bronze", () => {
    const props: UserCardReputationProps = {
      reputation: 1,
      gold: 1,
      silver: 2,
      bronze: 3,
    };

    const { getByTestId } = render(<UserCardReputation {...props} />);

    expect(
      getByTestId(testIds.userCardReputation.bronze).props.children
    ).toEqual(props.bronze);
  });

  it("Should not render gold if less than 1", () => {
    const props: UserCardReputationProps = {
      reputation: 1,
      gold: 0,
      silver: 2,
      bronze: 3,
    };

    const { queryByTestId } = render(<UserCardReputation {...props} />);

    expect(queryByTestId(testIds.userCardReputation.gold)).toBeNull();
  });

  it("Should not render silver if less than 1", () => {
    const props: UserCardReputationProps = {
      reputation: 1,
      gold: 1,
      silver: 0,
      bronze: 3,
    };

    const { queryByTestId } = render(<UserCardReputation {...props} />);

    expect(queryByTestId(testIds.userCardReputation.silver)).toBeNull();
  });

  it("Should not render bronze if less than 1", () => {
    const props: UserCardReputationProps = {
      reputation: 1,
      gold: 1,
      silver: 2,
      bronze: 0,
    };

    const { queryByTestId } = render(<UserCardReputation {...props} />);

    expect(queryByTestId(testIds.userCardReputation.bronze)).toBeNull();
  });
});
