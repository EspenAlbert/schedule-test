# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:42](#error-2025-08-24t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2c4192cd1cc589c1b9/limits | qa | flaky_500 | 228.02s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 minutes
- 2025-08-07 PASS 4 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 8 minutes
- 2025-08-10 PASS 3 minutes
- 2025-08-11 PASS 3 minutes
- 2025-08-12 PASS 3 minutes
- 2025-08-13 PASS 3 minutes
- 2025-08-14 PASS 3 minutes
- 2025-08-15 PASS 3 minutes
- 2025-08-16 PASS 3 minutes
- 2025-08-17 PASS 8 minutes
- 2025-08-18 PASS 3 minutes
- 2025-08-19 PASS 3 minutes
- 2025-08-20
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-08-21 PASS 3 minutes
- 2025-08-22 PASS 8 minutes
- 2025-08-23 PASS 3 minutes
- 2025-08-24

### Error 2025-08-24T00:42:57+00:00
```
2025-08-24T00:42:57.7010913Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-08-24T00:42:57.7016954Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-08-24T00:42:57.7072983Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-08-24T00:42:57.7074387Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-08-24T00:42:57.7075337Z         
2025-08-24T00:42:57.7076066Z         Error: error when getting project properties after create
2025-08-24T00:42:57.7076677Z         
2025-08-24T00:42:57.7077259Z           with mongodbatlas_project.second,
2025-08-24T00:42:57.7078592Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-08-24T00:42:57.7079647Z           36: 		resource "mongodbatlas_project" "second" {
2025-08-24T00:42:57.7080202Z         
2025-08-24T00:42:57.7081053Z         error getting project (68aa5d2c4192cd1cc589c1b9): error getting project's
2025-08-24T00:42:57.7081917Z         limits (68aa5d2c4192cd1cc589c1b9):
2025-08-24T00:42:57.7083171Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2c4192cd1cc589c1b9/limits
2025-08-24T00:42:57.7084560Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:57.7085665Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:57.7086404Z         BadRequestDetail: 
2025-08-24T00:42:57.7108913Z    test_working_directory=/tmp/plugintest2678847358 test_terraform_path=/home/runner/work/_temp/0d03cadb-0891-4d90-98ed-aa943cbba9a5/terraform test_name=TestAccNetworkNetworkPeering_basicAWS test_step_number=1
2025-08-24T00:42:57.7162866Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (228.16s)
```

- 2025-08-25 PASS 3 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 3 minutes
- 2025-08-28 PASS 3 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 3 minutes
- 2025-08-31 PASS 3 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5628053Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-01T00:42:46.5633870Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-01T00:42:46.5742962Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-09-01T00:42:46.5744295Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T00:42:46.5745216Z         
2025-09-01T00:42:46.5745973Z         Error: error creating project: test-acc-tf-p-3819386469505868570
2025-09-01T00:42:46.5746589Z         
2025-09-01T00:42:46.5747298Z           with mongodbatlas_project.first,
2025-09-01T00:42:46.5748395Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2025-09-01T00:42:46.5749391Z           13: 		resource "mongodbatlas_project" "first" {
2025-09-01T00:42:46.5749915Z         
2025-09-01T00:42:46.5750782Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5751941Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5753067Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5754165Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5754900Z         BadRequestDetail: 
2025-09-01T00:42:46.5755330Z         
2025-09-01T00:42:46.5756241Z         Error: error creating project: test-acc-tf-p-1233955216789513448
2025-09-01T00:42:46.5756864Z         
2025-09-01T00:42:46.5757571Z           with mongodbatlas_project.second,
2025-09-01T00:42:46.5758664Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-09-01T00:42:46.5759662Z           36: 		resource "mongodbatlas_project" "second" {
2025-09-01T00:42:46.5760195Z         
2025-09-01T00:42:46.5761041Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5762207Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5763327Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5764430Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5765152Z         BadRequestDetail: 
2025-09-01T00:42:46.5767563Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (1.41s)
```

  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 9 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 8 minutes
- 2025-09-02 PASS 3 minutes
- 2025-09-03 PASS 8 minutes
- 2025-09-04 PASS 3 minutes