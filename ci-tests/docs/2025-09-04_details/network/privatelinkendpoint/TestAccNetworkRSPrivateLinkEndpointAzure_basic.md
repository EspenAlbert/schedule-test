# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:43](#error-2025-08-17t0043360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cdaafa9a76ca8ba7e0/limits | qa | flaky_500 | 103.03s
[2025-08-24 00:42](#error-2025-08-24t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2a4192cd1cc589bd87/limits | qa | flaky_500 | 36.05s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 3 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS 3 minutes
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17

### Error 2025-08-17T00:43:36+00:00
```
2025-08-17T00:43:36.9947604Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-08-17T00:43:36.9949685Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-08-17T00:43:36.9964093Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-08-17T00:43:36.9964795Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:43:36.9965307Z         
2025-08-17T00:43:36.9965711Z         Error: error when getting project properties after create
2025-08-17T00:43:36.9966068Z         
2025-08-17T00:43:36.9966392Z           with mongodbatlas_project.test,
2025-08-17T00:43:36.9967218Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:43:36.9967792Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:43:36.9968106Z         
2025-08-17T00:43:36.9968575Z         error getting project (68a122cdaafa9a76ca8ba7e0): error getting project's
2025-08-17T00:43:36.9969066Z         limits (68a122cdaafa9a76ca8ba7e0):
2025-08-17T00:43:36.9969664Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cdaafa9a76ca8ba7e0/limits
2025-08-17T00:43:36.9970359Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:43:36.9970962Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:43:36.9971376Z         BadRequestDetail: 
2025-08-17T00:43:36.9971770Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (103.29s)
```

- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T00:42:57+00:00
```
2025-08-24T00:42:57.7249514Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-08-24T00:42:57.7253434Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-08-24T00:42:57.7278839Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-08-24T00:42:57.7280010Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:42:57.7280817Z         
2025-08-24T00:42:57.7281539Z         Error: error when getting project properties after create
2025-08-24T00:42:57.7282150Z         
2025-08-24T00:42:57.7282895Z           with mongodbatlas_project.test,
2025-08-24T00:42:57.7284029Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:57.7285053Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:57.7285605Z         
2025-08-24T00:42:57.7286467Z         error getting project (68aa5d2a4192cd1cc589bd87): error getting project's
2025-08-24T00:42:57.7287339Z         limits (68aa5d2a4192cd1cc589bd87):
2025-08-24T00:42:57.7288438Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2a4192cd1cc589bd87/limits
2025-08-24T00:42:57.7289686Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:57.7290955Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:57.7291705Z         BadRequestDetail: 
2025-08-24T00:42:57.7292377Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (36.52s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27 PASS a minute
- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS 3 minutes
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5827797Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-01T00:42:46.5829799Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-01T00:42:46.5882267Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-01T00:42:46.5882888Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5883329Z         
2025-09-01T00:42:46.5883765Z         Error: error creating project: test-acc-tf-p-5559761820632632252
2025-09-01T00:42:46.5884122Z         
2025-09-01T00:42:46.5884438Z           with mongodbatlas_project.test,
2025-09-01T00:42:46.5885047Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:42:46.5885606Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:42:46.5885906Z         
2025-09-01T00:42:46.5886393Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5887160Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5887801Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5888457Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5888882Z         BadRequestDetail: 
2025-09-01T00:42:46.5890192Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (1.53s)
```

  - PASS 2 minutes
  - PASS 2 minutes
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute