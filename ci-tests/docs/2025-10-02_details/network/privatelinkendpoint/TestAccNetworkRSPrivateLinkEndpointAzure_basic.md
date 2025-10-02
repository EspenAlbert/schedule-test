# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:46](#error-2025-09-08t0946170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a50cddbf4f6e498fba/limits | qa | flaky_500 | 33.02s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c421411d835e95b3629/limits | qa | flaky_500 | 35.07s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03efe60767b7f9af6f9/limits | qa | flaky_500 | 34.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07 PASS 2 minutes
- 2025-09-08
  - PASS a minute
  - FAIL 33 seconds

### Error 2025-09-08T09:46:17+00:00
```
2025-09-08T09:46:17.9938808Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-08T09:46:17.9940929Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-08T09:46:17.9977647Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-08T09:46:17.9978285Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:46:17.9978755Z         
2025-09-08T09:46:17.9979172Z         Error: error when getting project properties after create
2025-09-08T09:46:17.9979530Z         
2025-09-08T09:46:17.9979873Z           with mongodbatlas_project.test,
2025-09-08T09:46:17.9980508Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:46:17.9981079Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:46:17.9981403Z         
2025-09-08T09:46:17.9981889Z         error getting project (68bea2a50cddbf4f6e498fba): error getting project's
2025-09-08T09:46:17.9982411Z         limits (68bea2a50cddbf4f6e498fba):
2025-09-08T09:46:17.9983021Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a50cddbf4f6e498fba/limits
2025-09-08T09:46:17.9983727Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:17.9984336Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:17.9984758Z         BadRequestDetail: 
2025-09-08T09:46:17.9985143Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (33.19s)
```

  - PASS a minute
- 2025-09-09 PASS a minute
- 2025-09-10 PASS a minute
- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS a minute
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6600375Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-14T00:41:24.6605589Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-14T00:41:24.6668151Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-14T00:41:24.6668707Z     resource_test.go:60: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6669094Z         
2025-09-14T00:41:24.6669501Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6669856Z         
2025-09-14T00:41:24.6670171Z           with mongodbatlas_project.test,
2025-09-14T00:41:24.6670791Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:24.6671366Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:41:24.6671678Z         
2025-09-14T00:41:24.6672146Z         error getting project (68c60c421411d835e95b3629): error getting project's
2025-09-14T00:41:24.6672631Z         limits (68c60c421411d835e95b3629):
2025-09-14T00:41:24.6673446Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c421411d835e95b3629/limits
2025-09-14T00:41:24.6674148Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6674895Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6675422Z         BadRequestDetail: 
2025-09-14T00:41:24.6675799Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (35.70s)
```

- 2025-09-15
  - PASS 2 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3304588Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-15T06:33:08.3309120Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-15T06:33:08.3363272Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-09-15T06:33:08.3363913Z     resource_test.go:60: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3364311Z         
2025-09-15T06:33:08.3364825Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3365171Z         
2025-09-15T06:33:08.3365570Z           with mongodbatlas_project.test,
2025-09-15T06:33:08.3366194Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:08.3366859Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:33:08.3367265Z         
2025-09-15T06:33:08.3367737Z         error getting project (68c7b03efe60767b7f9af6f9): error getting project's
2025-09-15T06:33:08.3368473Z         limits (68c7b03efe60767b7f9af6f9):
2025-09-15T06:33:08.3369188Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03efe60767b7f9af6f9/limits
2025-09-15T06:33:08.3369988Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3370697Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3371108Z         BadRequestDetail: 
2025-09-15T06:33:08.3371590Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (34.43s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS 2 minutes
- 2025-09-21 PASS a minute
- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS 2 minutes
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute