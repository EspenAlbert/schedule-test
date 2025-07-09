# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 1.06s
2025-06-05 00:54 | dev | 4.03s
2025-07-06 00:44 | qa | 200.07s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 2 minutes
### 2025-04-12
#### PASS 2 minutes
### 2025-04-13
#### PASS 2 minutes
### 2025-04-14
#### PASS 2 minutes
### 2025-04-15
#### PASS 2 minutes
### 2025-04-16
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-04-17
#### PASS 2 minutes
### 2025-04-18
#### PASS 3 minutes
### 2025-04-19
#### PASS 3 minutes
### 2025-04-20
#### PASS 3 minutes
### 2025-04-21
#### PASS 2 minutes
### 2025-04-22
#### PASS 2 minutes
### 2025-04-23
#### PASS 2 minutes
### 2025-04-24
#### PASS 2 minutes
### 2025-04-25
#### PASS 2 minutes
### 2025-04-26
#### PASS 3 minutes
### 2025-04-27
#### PASS 2 minutes
### 2025-04-28
#### PASS 2 minutes
### 2025-04-29
#### PASS 2 minutes
### 2025-04-30
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-01
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-02
#### PASS 2 minutes
### 2025-05-03
#### PASS 2 minutes
### 2025-05-04
#### PASS 2 minutes
### 2025-05-05
#### PASS 2 minutes
### 2025-05-06
#### PASS 2 minutes
### 2025-05-07
#### PASS 2 minutes
### 2025-05-08
#### PASS 2 minutes
### 2025-05-09
#### PASS 2 minutes
### 2025-05-10
#### PASS 2 minutes
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:57.8710355Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-05-11T00:29:57.8733082Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-05-11T00:29:57.8742333Z    test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName test_terraform_path=/home/runner/work/_temp/ffc2262a-5740-46ce-ae59-28106014b618/terraform
2025-05-11T00:29:57.8785435Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-05-11T00:29:57.8786026Z     resource_network_peering_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8786476Z         
2025-05-11T00:29:57.8786923Z         Error: error creating project: test-acc-tf-p-886186042163734353
2025-05-11T00:29:57.8787310Z         
2025-05-11T00:29:57.8787665Z           with mongodbatlas_project.my_project,
2025-05-11T00:29:57.8788332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-05-11T00:29:57.8789069Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-05-11T00:29:57.8789427Z         
2025-05-11T00:29:57.8789923Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8790353Z         type
2025-05-11T00:29:57.8791195Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (1.65s)
```
### 2025-05-12
#### PASS 2 minutes
### 2025-05-13
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-14
#### PASS 2 minutes
### 2025-05-15
#### PASS 2 minutes
### 2025-05-16
#### PASS 2 minutes
### 2025-05-17
#### PASS 2 minutes
### 2025-05-18
#### PASS 2 minutes
### 2025-05-19
#### PASS 2 minutes
### 2025-05-20
#### PASS 2 minutes
### 2025-05-21
#### PASS 2 minutes
### 2025-05-22
#### PASS 2 minutes
### 2025-05-23
#### PASS 2 minutes
### 2025-05-24
#### PASS 2 minutes
### 2025-05-25
#### PASS 2 minutes
### 2025-05-26
#### PASS 2 minutes
### 2025-05-27
#### PASS 2 minutes
### 2025-05-28
#### PASS 2 minutes
#### PASS 3 minutes
### 2025-05-29
#### PASS 2 minutes
### 2025-05-30
#### PASS 2 minutes
### 2025-05-31
#### PASS 2 minutes
### 2025-06-01
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-02
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-03
#### PASS 2 minutes
### 2025-06-04
#### PASS 2 minutes
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:54:09.2430916Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-06-05T00:54:09.2440426Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-06-05T00:54:09.2465137Z    test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-06-05T00:54:09.2516788Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-06-05T00:54:09.2517376Z     resource_network_peering_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2517812Z         
2025-06-05T00:54:09.2518240Z         Error: error creating project: test-acc-tf-p-865857075781788302
2025-06-05T00:54:09.2518608Z         
2025-06-05T00:54:09.2518952Z           with mongodbatlas_project.my_project,
2025-06-05T00:54:09.2519602Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-06-05T00:54:09.2520211Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-06-05T00:54:09.2520674Z         
2025-06-05T00:54:09.2521162Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2521806Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2522392Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2522830Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (4.32s)
```
### 2025-06-06
#### PASS 2 minutes
### 2025-06-07
#### PASS 2 minutes
### 2025-06-08
#### PASS 2 minutes
### 2025-06-09
#### PASS 2 minutes
### 2025-06-10
#### PASS 2 minutes
### 2025-06-11
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-12
#### PASS 3 minutes
### 2025-06-13
#### PASS 2 minutes
### 2025-06-14
#### PASS 2 minutes
### 2025-06-15
#### PASS 2 minutes
### 2025-06-16
#### PASS 2 minutes
### 2025-06-17
#### PASS 2 minutes
### 2025-06-18
#### PASS 3 minutes
### 2025-06-19
#### PASS 2 minutes
### 2025-06-20
#### PASS 3 minutes
### 2025-06-21
#### PASS 2 minutes
### 2025-06-22
#### PASS 3 minutes
### 2025-06-23
#### PASS 2 minutes
### 2025-06-24
#### PASS 2 minutes
### 2025-06-25
#### PASS 2 minutes
### 2025-06-26
#### PASS 2 minutes
### 2025-06-27
#### PASS 2 minutes
### 2025-06-28
#### PASS 2 minutes
### 2025-06-29
#### PASS 3 minutes
### 2025-06-30
#### PASS 2 minutes
### 2025-07-01
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 3 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 3 minutes
### 2025-07-02
#### PASS 2 minutes
### 2025-07-03
#### PASS 2 minutes
### 2025-07-04
#### PASS 2 minutes
### 2025-07-05
#### PASS 2 minutes
### 2025-07-06
#### FAIL 3 minutes
```
2025-07-06T00:44:46.6240028Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6251282Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6341988Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6343263Z     resource_network_peering_test.go:26: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6344288Z         
2025-07-06T00:44:46.6345054Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6345665Z         
2025-07-06T00:44:46.6346258Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6347424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6348520Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6349091Z         
2025-07-06T00:44:46.6349918Z         error getting project (6869c407690ae45e168bd2ab): error getting project's
2025-07-06T00:44:46.6350758Z         limits (6869c407690ae45e168bd2ab):
2025-07-06T00:44:46.6351893Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c407690ae45e168bd2ab/limits
2025-07-06T00:44:46.6353319Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6354582Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6355320Z         BadRequestDetail: 
2025-07-06T00:44:46.6378356Z    test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6392797Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (200.68s)
```
### 2025-07-07
#### PASS 2 minutes
### 2025-07-08
#### PASS 2 minutes
### 2025-07-09
#### PASS 3 minutes