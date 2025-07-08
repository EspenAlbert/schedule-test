# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:45:58.4606458Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-01T08:45:58.4608814Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-01T08:45:58.4609649Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAzure_basic (112.87s)
```
### 2025-07-02
#### PASS 3 minutes
```
2025-07-02T00:41:12.3605434Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-02T00:41:12.3608896Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-02T00:41:12.3611970Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAzure_basic (223.94s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:41:46.0967090Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-03T00:41:46.0969109Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-03T00:41:46.0970360Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAzure_basic (82.17s)
```
### 2025-07-04
#### PASS 3 minutes
```
2025-07-04T01:28:53.1682990Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-04T01:28:53.1685285Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-04T01:28:53.1686664Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAzure_basic (183.95s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T01:27:57.7334217Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-05T01:27:57.7337435Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-05T01:27:57.7338176Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAzure_basic (114.07s)
```
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
```
2025-07-07T01:31:31.6589624Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-07T01:31:31.6592305Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-07T01:31:31.6593537Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAzure_basic (93.60s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:41:50.6697202Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-08T00:41:50.6699608Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-07-08T00:41:50.6700454Z --- PASS: TestAccNetworkRSPrivateLinkEndpointAzure_basic (104.75s)
```