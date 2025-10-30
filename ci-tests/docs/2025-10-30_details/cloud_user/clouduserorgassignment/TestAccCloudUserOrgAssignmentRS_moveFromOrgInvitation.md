# cloud_user/clouduserorgassignment/TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 11:48](#error-2025-10-01t1148220000) |  | dev | 2.07s
[2025-10-01 14:14](#error-2025-10-01t1414360000) |  | dev | 2.09s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - FAIL 2 seconds

### Error 2025-10-01T11:48:22+00:00
```
2025-10-01T11:48:22.1790721Z === RUN   TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation
2025-10-01T11:48:22.1796143Z === CONT  TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation
2025-10-01T11:48:22.1815813Z === NAME  TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation
2025-10-01T11:48:22.1816481Z     move_state_test.go:20: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-10-01T11:48:22.1816891Z         
2025-10-01T11:48:22.1817185Z         Error: Resource type mismatch
2025-10-01T11:48:22.1817467Z         
2025-10-01T11:48:22.1817930Z         This statement declares a move from mongodbatlas_org_invitation.old to
2025-10-01T11:48:22.1818565Z         mongodbatlas_cloud_user_org_assignment.test, which is a resource of a
2025-10-01T11:48:22.1820680Z         different type.
2025-10-01T11:48:22.1821799Z   diagnostic_detail=
2025-10-01T11:48:22.1826521Z    diagnostic_severity=ERROR diagnostic_summary="Unable to Read Previously Saved State for UpgradeResourceState" tf_req_id=2b29b9a8-ad96-62f7-08a5-c386f7a1b492 tf_resource_type=mongodbatlas_cloud_user_org_assignment tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-10-01T11:48:22.1832176Z    test_working_directory=/tmp/plugintest289339800
2025-10-01T11:48:22.1833605Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T11:48:22.1834422Z         
2025-10-01T11:48:22.1834813Z         Error: Resource type mismatch
2025-10-01T11:48:22.1835121Z         
2025-10-01T11:48:22.1835584Z         This statement declares a move from mongodbatlas_org_invitation.old to
2025-10-01T11:48:22.1836209Z         mongodbatlas_cloud_user_org_assignment.test, which is a resource of a
2025-10-01T11:48:22.1836621Z         different type.
2025-10-01T11:48:22.1837002Z --- FAIL: TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation (2.68s)
```

  - FAIL 2 seconds

### Error 2025-10-01T14:14:36+00:00
```
2025-10-01T14:14:36.3430493Z === RUN   TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation
2025-10-01T14:14:36.3435113Z === CONT  TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation
2025-10-01T14:14:36.3454961Z === NAME  TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation
2025-10-01T14:14:36.3455594Z     move_state_test.go:20: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-10-01T14:14:36.3455992Z         
2025-10-01T14:14:36.3456255Z         Error: Resource type mismatch
2025-10-01T14:14:36.3456507Z         
2025-10-01T14:14:36.3456932Z         This statement declares a move from mongodbatlas_org_invitation.old to
2025-10-01T14:14:36.3457535Z         mongodbatlas_cloud_user_org_assignment.test, which is a resource of a
2025-10-01T14:14:36.3457924Z         different type.
2025-10-01T14:14:36.3460073Z   diagnostic_detail=
2025-10-01T14:14:36.3466236Z    diagnostic_severity=ERROR tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_req_id=d88a9231-845c-69d3-c6b9-5c3654f56868 tf_rpc=UpgradeResourceState
2025-10-01T14:14:36.3472513Z    test_step_number=2 test_name=TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation
2025-10-01T14:14:36.3473444Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T14:14:36.3473877Z         
2025-10-01T14:14:36.3474141Z         Error: Resource type mismatch
2025-10-01T14:14:36.3474393Z         
2025-10-01T14:14:36.3474821Z         This statement declares a move from mongodbatlas_org_invitation.old to
2025-10-01T14:14:36.3475417Z         mongodbatlas_cloud_user_org_assignment.test, which is a resource of a
2025-10-01T14:14:36.3475806Z         different type.
2025-10-01T14:14:36.3476158Z --- FAIL: TestAccCloudUserOrgAssignmentRS_moveFromOrgInvitation (2.88s)
```

- 2025-10-02 PASS 3 seconds
- 2025-10-03 PASS 4 seconds
- 2025-10-04 PASS 4 seconds
- 2025-10-05 PASS 3 seconds
- 2025-10-06 PASS 3 seconds
- 2025-10-07 PASS 3 seconds
- 2025-10-08 PASS 3 seconds
- 2025-10-09 PASS 3 seconds
- 2025-10-10 PASS 4 seconds
- 2025-10-11 PASS 3 seconds
- 2025-10-12 PASS 3 seconds
- 2025-10-13 PASS 3 seconds
- 2025-10-14 PASS 4 seconds
- 2025-10-15 PASS 4 seconds
- 2025-10-16 PASS 4 seconds
- 2025-10-17 PASS 3 seconds
- 2025-10-18 PASS 3 seconds
- 2025-10-19 PASS 3 seconds
- 2025-10-20
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 3 seconds
- 2025-10-22
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-10-23 PASS 3 seconds
- 2025-10-24 PASS 3 seconds
- 2025-10-25 PASS 3 seconds
- 2025-10-26 PASS 4 seconds
- 2025-10-27 PASS 4 seconds
- 2025-10-28 PASS 3 seconds
- 2025-10-29 PASS 3 seconds
- 2025-10-30 PASS 3 seconds