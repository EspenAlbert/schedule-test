# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa |  | 1.05s
[2025-06-05 00:54](#error-2025-06-05t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.06s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4047267b5775b682bff/limits | qa | flaky_500 | 34.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS a minute
- 2025-04-13 PASS a minute
- 2025-04-14 PASS a minute
- 2025-04-15 PASS a minute
- 2025-04-16
  - PASS a minute
  - PASS 2 minutes
- 2025-04-17 PASS a minute
- 2025-04-18 PASS a minute
- 2025-04-19 PASS a minute
- 2025-04-20 PASS a minute
- 2025-04-21 PASS a minute
- 2025-04-22 PASS a minute
- 2025-04-23 PASS 2 minutes
- 2025-04-24 PASS a minute
- 2025-04-25 PASS a minute
- 2025-04-26 PASS a minute
- 2025-04-27 PASS a minute
- 2025-04-28 PASS a minute
- 2025-04-29 PASS a minute
- 2025-04-30
  - PASS a minute
  - PASS a minute
- 2025-05-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-05-02 PASS a minute
- 2025-05-03 PASS a minute
- 2025-05-04 PASS a minute
- 2025-05-05 PASS a minute
- 2025-05-06 PASS a minute
- 2025-05-07 PASS a minute
- 2025-05-08 PASS a minute
- 2025-05-09 PASS a minute
- 2025-05-10 PASS a minute
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8845234Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-05-11T00:29:57.8847365Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-05-11T00:29:57.8858419Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-05-11T00:29:57.8859245Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8859728Z         
2025-05-11T00:29:57.8860180Z         Error: error creating project: test-acc-tf-p-6722757732165275430
2025-05-11T00:29:57.8860565Z         
2025-05-11T00:29:57.8860923Z           with mongodbatlas_project.test,
2025-05-11T00:29:57.8861556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:57.8862133Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:57.8862463Z         
2025-05-11T00:29:57.8862959Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8863391Z         type
2025-05-11T00:29:57.8863752Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (1.51s)
```

- 2025-05-12 PASS a minute
- 2025-05-13
  - PASS a minute
  - PASS a minute
- 2025-05-14 PASS a minute
- 2025-05-15 PASS a minute
- 2025-05-16 PASS a minute
- 2025-05-17 PASS a minute
- 2025-05-18 PASS a minute
- 2025-05-19 PASS a minute
- 2025-05-20 PASS a minute
- 2025-05-21 PASS a minute
- 2025-05-22 PASS a minute
- 2025-05-23 PASS a minute
- 2025-05-24 PASS a minute
- 2025-05-25 PASS a minute
- 2025-05-26 PASS a minute
- 2025-05-27 PASS a minute
- 2025-05-28
  - PASS a minute
  - PASS a minute
- 2025-05-29 PASS a minute
- 2025-05-30 PASS 2 minutes
- 2025-05-31 PASS a minute
- 2025-06-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-02
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-03 PASS a minute
- 2025-06-04 PASS a minute
- 2025-06-05

### Error 2025-06-05T00:54:09+00:00
```
2025-06-05T00:54:09.2608399Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-06-05T00:54:09.2611242Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-06-05T00:54:09.2621880Z    test_step_number=1 test_working_directory=/tmp/plugintest3936513353 test_name=TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-06-05T00:54:09.2622748Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2623204Z         
2025-06-05T00:54:09.2623650Z         Error: error creating project: test-acc-tf-p-4802458064423368206
2025-06-05T00:54:09.2624022Z         
2025-06-05T00:54:09.2624355Z           with mongodbatlas_project.test,
2025-06-05T00:54:09.2624974Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:54:09.2625655Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:54:09.2625973Z         
2025-06-05T00:54:09.2626455Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2627113Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2627713Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2628193Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (2.63s)
```

- 2025-06-06 PASS a minute
- 2025-06-07 PASS a minute
- 2025-06-08 PASS a minute
- 2025-06-09 PASS a minute
- 2025-06-10 PASS a minute
- 2025-06-11
  - PASS a minute
  - PASS a minute
- 2025-06-12 PASS a minute
- 2025-06-13 PASS a minute
- 2025-06-14 PASS 2 minutes
- 2025-06-15 PASS a minute
- 2025-06-16 PASS a minute
- 2025-06-17 PASS 2 minutes
- 2025-06-18 PASS a minute
- 2025-06-19 PASS a minute
- 2025-06-20 PASS 2 minutes
- 2025-06-21 PASS a minute
- 2025-06-22 PASS a minute
- 2025-06-23 PASS a minute
- 2025-06-24 PASS a minute
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS 2 minutes
- 2025-06-29 PASS 2 minutes
- 2025-06-30 PASS a minute
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS a minute
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6458706Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-06T00:44:46.6460720Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-06T00:44:46.6475201Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-06T00:44:46.6475858Z     resource_privatelink_endpoint_test.go:59: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:44:46.6476460Z         
2025-07-06T00:44:46.6476870Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6477217Z         
2025-07-06T00:44:46.6477528Z           with mongodbatlas_project.test,
2025-07-06T00:44:46.6478141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:44:46.6478704Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:44:46.6479024Z         
2025-07-06T00:44:46.6479503Z         error getting project (6869c4047267b5775b682bff): error getting project's
2025-07-06T00:44:46.6479969Z         limits (6869c4047267b5775b682bff):
2025-07-06T00:44:46.6480556Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4047267b5775b682bff/limits
2025-07-06T00:44:46.6481394Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6481991Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6482400Z         BadRequestDetail: 
2025-07-06T00:44:46.6482780Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (34.37s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10 PASS a minute