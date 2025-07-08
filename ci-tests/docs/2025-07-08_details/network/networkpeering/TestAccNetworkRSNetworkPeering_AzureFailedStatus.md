# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 8 minutes
```
2025-07-01T08:45:58.4585698Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-01T08:45:58.4588954Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-01T08:45:58.4595942Z --- PASS: TestAccNetworkRSNetworkPeering_AzureFailedStatus (519.89s)
```
### 2025-07-02
#### PASS 3 minutes
```
2025-07-02T00:41:12.3569526Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-02T00:41:12.3575348Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-02T00:41:12.3585763Z --- PASS: TestAccNetworkRSNetworkPeering_AzureFailedStatus (206.63s)
```
### 2025-07-03
#### PASS 3 minutes
```
2025-07-03T00:41:46.0945924Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-03T00:41:46.0949261Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-03T00:41:46.0955445Z --- PASS: TestAccNetworkRSNetworkPeering_AzureFailedStatus (216.03s)
```
### 2025-07-04
#### PASS 3 minutes
```
2025-07-04T00:41:12.9180615Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-04T00:41:12.9183956Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-04T00:41:12.9190530Z --- PASS: TestAccNetworkRSNetworkPeering_AzureFailedStatus (217.88s)
```
### 2025-07-05
#### PASS 3 minutes
```
2025-07-05T00:40:18.8595163Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-05T00:40:18.8598528Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-05T00:40:18.8604407Z --- PASS: TestAccNetworkRSNetworkPeering_AzureFailedStatus (216.73s)
```
### 2025-07-06
#### FAIL 3 minutes
```
2025-07-06T00:44:46.6244007Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-06T00:44:46.6252002Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-06T00:44:46.6275621Z    test_name=TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6304910Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-06T00:44:46.6306253Z     resource_network_peering_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-06T00:44:46.6307195Z         
2025-07-06T00:44:46.6307899Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6308672Z         
2025-07-06T00:44:46.6309241Z           with mongodbatlas_project.second,
2025-07-06T00:44:46.6310354Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2025-07-06T00:44:46.6311388Z           36: 		resource "mongodbatlas_project" "second" {
2025-07-06T00:44:46.6311936Z         
2025-07-06T00:44:46.6312759Z         error getting project (6869c407690ae45e168bd2bd): error getting project's
2025-07-06T00:44:46.6313605Z         limits (6869c407690ae45e168bd2bd):
2025-07-06T00:44:46.6314850Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c407690ae45e168bd2bd/limits
2025-07-06T00:44:46.6316089Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6317166Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6317898Z         BadRequestDetail: 
2025-07-06T00:44:46.6341458Z   
2025-07-06T00:44:46.6393609Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (209.10s)
```
### 2025-07-07
#### PASS 3 minutes
```
2025-07-07T00:43:51.4391585Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-07T00:43:51.4395340Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-07T00:43:51.4403174Z --- PASS: TestAccNetworkRSNetworkPeering_AzureFailedStatus (206.40s)
```
### 2025-07-08
#### PASS 3 minutes
```
2025-07-08T00:41:50.6676347Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-08T00:41:50.6679629Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-07-08T00:41:50.6685596Z --- PASS: TestAccNetworkRSNetworkPeering_AzureFailedStatus (210.92s)
```