# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 3 minutes
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### PASS 3 minutes
### 2025-07-05
#### PASS a minute
### 2025-07-06
#### FAIL 34 seconds
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
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### PASS a minute