# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:46](#error-2025-09-08t0946170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a50cddbf4f6e498fbb/limits | qa | flaky_500 | 32.09s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c42d444485797b21496/limits | qa | flaky_500 | 33.04s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03efe60767b7f9af7cc/limits | qa | flaky_500 | 34.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 minutes
- 2025-09-04 PASS 9 minutes
- 2025-09-05 PASS 9 minutes
- 2025-09-06 PASS 10 minutes
- 2025-09-07 PASS 12 minutes
- 2025-09-08
  - PASS 8 minutes
  - FAIL 32 seconds

### Error 2025-09-08T09:46:17+00:00
```
2025-09-08T09:46:17.9939667Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-08T09:46:17.9941367Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-08T09:46:17.9955944Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-08T09:46:17.9956591Z     resource_privatelink_endpoint_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:46:17.9957063Z         
2025-09-08T09:46:17.9957489Z         Error: error when getting project properties after create
2025-09-08T09:46:17.9957854Z         
2025-09-08T09:46:17.9958187Z           with mongodbatlas_project.test,
2025-09-08T09:46:17.9958819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:46:17.9959401Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:46:17.9959721Z         
2025-09-08T09:46:17.9960210Z         error getting project (68bea2a50cddbf4f6e498fbb): error getting project's
2025-09-08T09:46:17.9960715Z         limits (68bea2a50cddbf4f6e498fbb):
2025-09-08T09:46:17.9961334Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a50cddbf4f6e498fbb/limits
2025-09-08T09:46:17.9962045Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:17.9962658Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:17.9963092Z         BadRequestDetail: 
2025-09-08T09:46:17.9963473Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (32.88s)
```

  - PASS 8 minutes
- 2025-09-09 PASS 8 minutes
- 2025-09-10 PASS 8 minutes
- 2025-09-11 PASS 8 minutes
- 2025-09-12 PASS 9 minutes
- 2025-09-13 PASS 17 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6601695Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-14T00:41:24.6604733Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-14T00:41:24.6625835Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-14T00:41:24.6626486Z     resource_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6626882Z         
2025-09-14T00:41:24.6627288Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6627645Z         
2025-09-14T00:41:24.6627962Z           with mongodbatlas_project.test,
2025-09-14T00:41:24.6628581Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:24.6629157Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:41:24.6629471Z         
2025-09-14T00:41:24.6629938Z         error getting project (68c60c42d444485797b21496): error getting project's
2025-09-14T00:41:24.6630418Z         limits (68c60c42d444485797b21496):
2025-09-14T00:41:24.6631022Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c42d444485797b21496/limits
2025-09-14T00:41:24.6631733Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6632355Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6632774Z         BadRequestDetail: 
2025-09-14T00:41:24.6633333Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (33.41s)
```

- 2025-09-15
  - PASS 9 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3305453Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-15T06:33:08.3308310Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-15T06:33:08.3387428Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-09-15T06:33:08.3388159Z     resource_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3388580Z         
2025-09-15T06:33:08.3389043Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3389454Z         
2025-09-15T06:33:08.3389797Z           with mongodbatlas_project.test,
2025-09-15T06:33:08.3390508Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:08.3391159Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:33:08.3391466Z         
2025-09-15T06:33:08.3392025Z         error getting project (68c7b03efe60767b7f9af7cc): error getting project's
2025-09-15T06:33:08.3392504Z         limits (68c7b03efe60767b7f9af7cc):
2025-09-15T06:33:08.3393191Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03efe60767b7f9af7cc/limits
2025-09-15T06:33:08.3393966Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3394662Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3395092Z         BadRequestDetail: 
2025-09-15T06:33:08.3395551Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (34.89s)
```

- 2025-09-16 PASS 8 minutes
- 2025-09-17 PASS 10 minutes
- 2025-09-18 PASS 9 minutes
- 2025-09-19 PASS 10 minutes
- 2025-09-20 PASS 29 minutes
- 2025-09-21 PASS 8 minutes
- 2025-09-22 PASS 8 minutes
- 2025-09-23 PASS 8 minutes
- 2025-09-24 PASS 9 minutes
- 2025-09-25 PASS 8 minutes
- 2025-09-26 PASS 9 minutes
- 2025-09-27 PASS 9 minutes
- 2025-09-28 PASS 8 minutes
- 2025-09-29 PASS 12 minutes
- 2025-09-30
  - PASS 7 minutes
  - PASS 8 minutes
  - PASS 7 minutes
  - PASS 9 minutes
- 2025-10-01
  - PASS 9 minutes
  - PASS 7 minutes
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 8 minutes
  - PASS 9 minutes
  - PASS 11 minutes
  - PASS 8 minutes
- 2025-10-02 PASS 10 minutes