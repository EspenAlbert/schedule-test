# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:47](#error-2025-09-07t0047560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d48704811492b538fa/dataFederation/test-acc-tf-5139080019147569594 | qa | flaky_500 | 96.01s
[2025-09-14 00:41](#error-2025-09-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c46d444485797b21c5b/limits | qa | flaky_500 | 49.07s
[2025-09-15 06:33](#error-2025-09-15t0633000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04ffe60767b7f9b1aa6/limits | qa | flaky_500 | 47.08s
[2025-09-21 00:48](#error-2025-09-21t0048040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46f15ccc8c4417189c78/dataFederation | qa | flaky_500 | 73.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 57 seconds
- 2025-09-04 PASS 55 seconds
- 2025-09-05 PASS 53 seconds
- 2025-09-06 PASS 54 seconds
- 2025-09-07

### Error 2025-09-07T00:47:56+00:00
```
2025-09-07T00:47:56.6561789Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-07T00:47:56.6574444Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-07T00:47:56.6662932Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-07T00:47:56.6663575Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-07T00:47:56.6664146Z         
2025-09-07T00:47:56.6666074Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-5139080019147569594): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d48704811492b538fa/dataFederation/test-acc-tf-5139080019147569594 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6667422Z         
2025-09-07T00:47:56.6667783Z           with mongodbatlas_federated_database_instance.test,
2025-09-07T00:47:56.6668478Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-07T00:47:56.6669450Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-07T00:47:56.6669783Z         
2025-09-07T00:47:56.6671575Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d48704811492b538fa/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6672708Z         
2025-09-07T00:47:56.6673065Z           with mongodbatlas_federated_database_instance.test2,
2025-09-07T00:47:56.6673771Z           on terraform_plugin_test.tf line 165, in resource "mongodbatlas_federated_database_instance" "test2":
2025-09-07T00:47:56.6674434Z          165: resource "mongodbatlas_federated_database_instance" "test2" {
2025-09-07T00:47:56.6674802Z         
2025-09-07T00:47:56.6722792Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-07T00:47:56.6723391Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-07T00:47:56.6723815Z         
2025-09-07T00:47:56.6724105Z         Error: error when destroying resource
2025-09-07T00:47:56.6724381Z         
2025-09-07T00:47:56.6724712Z         error deleting project (68bcd1d48704811492b538fa):
2025-09-07T00:47:56.6725266Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d48704811492b538fa
2025-09-07T00:47:56.6725742Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-07T00:47:56.6726244Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_DATA_LAKES") Detail: Cannot close group
2025-09-07T00:47:56.6726835Z         while it has active federated database instances; please terminate all
2025-09-07T00:47:56.6727492Z         federated database instances. Reason: Conflict. Params: [], BadRequestDetail:
2025-09-07T00:47:56.6727994Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (96.08s)
```

- 2025-09-08
  - PASS 51 seconds
  - PASS a minute
  - PASS a minute
- 2025-09-09 PASS 58 seconds
- 2025-09-10 PASS 53 seconds
- 2025-09-11 PASS 53 seconds
- 2025-09-12 PASS 52 seconds
- 2025-09-13 PASS 49 seconds
- 2025-09-14

### Error 2025-09-14T00:41:18+00:00
```
2025-09-14T00:41:18.3200338Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-14T00:41:18.3215096Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-14T00:41:18.3339039Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-14T00:41:18.3339711Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:41:18.3340188Z         
2025-09-14T00:41:18.3340573Z         Error: error when getting project properties after create
2025-09-14T00:41:18.3340917Z         
2025-09-14T00:41:18.3341217Z           with mongodbatlas_project.test,
2025-09-14T00:41:18.3341822Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:18.3342365Z           68: resource "mongodbatlas_project" "test" {
2025-09-14T00:41:18.3342663Z         
2025-09-14T00:41:18.3343110Z         error getting project (68c60c46d444485797b21c5b): error getting project's
2025-09-14T00:41:18.3343675Z         limits (68c60c46d444485797b21c5b):
2025-09-14T00:41:18.3344251Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c46d444485797b21c5b/limits
2025-09-14T00:41:18.3344927Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:18.3345506Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:18.3345909Z         BadRequestDetail: 
2025-09-14T00:41:18.3347151Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (49.68s)
```

- 2025-09-15
  - PASS 57 seconds
  - FAIL 47 seconds

### Error 2025-09-15T06:33:00+00:00
```
2025-09-15T06:33:00.5992658Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-15T06:33:00.6005622Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-15T06:33:00.6098982Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-15T06:33:00.6099644Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:33:00.6100095Z         
2025-09-15T06:33:00.6100477Z         Error: error when getting project properties after create
2025-09-15T06:33:00.6100796Z         
2025-09-15T06:33:00.6101087Z           with mongodbatlas_project.test,
2025-09-15T06:33:00.6101668Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:00.6102201Z           68: resource "mongodbatlas_project" "test" {
2025-09-15T06:33:00.6102481Z         
2025-09-15T06:33:00.6102917Z         error getting project (68c7b04ffe60767b7f9b1aa6): error getting project's
2025-09-15T06:33:00.6103366Z         limits (68c7b04ffe60767b7f9b1aa6):
2025-09-15T06:33:00.6103937Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04ffe60767b7f9b1aa6/limits
2025-09-15T06:33:00.6104598Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:00.6105173Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:00.6105562Z         BadRequestDetail: 
2025-09-15T06:33:00.6117384Z    test_name=TestAccFederatedDatabaseInstance_s3bucket test_terraform_path=/home/runner/work/_temp/10155f99-e370-448f-bf30-2ea60107e68c/terraform test_working_directory=/tmp/plugintest2386518798
2025-09-15T06:33:00.6145059Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (47.83s)
```

- 2025-09-16 PASS 59 seconds
- 2025-09-17 PASS 55 seconds
- 2025-09-18 PASS 52 seconds
- 2025-09-19 PASS 54 seconds
- 2025-09-20 PASS 54 seconds
- 2025-09-21

### Error 2025-09-21T00:48:04+00:00
```
2025-09-21T00:48:04.2555712Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-21T00:48:04.2567798Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-21T00:48:04.2598408Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-21T00:48:04.2599323Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running post-apply non-refresh plan: exit status 1
2025-09-21T00:48:04.2599852Z         
2025-09-21T00:48:04.2601595Z         Error: error getting MongoDB Atlas Federated Database Instances information: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46f15ccc8c4417189c78/dataFederation GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-21T00:48:04.2602880Z         
2025-09-21T00:48:04.2603300Z           with data.mongodbatlas_federated_database_instances.test,
2025-09-21T00:48:04.2604024Z           on terraform_plugin_test.tf line 202, in data "mongodbatlas_federated_database_instances" "test":
2025-09-21T00:48:04.2604689Z          202: data "mongodbatlas_federated_database_instances" "test" {
2025-09-21T00:48:04.2605026Z         
2025-09-21T00:48:04.2606082Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (73.07s)
```

- 2025-09-22 PASS 51 seconds
- 2025-09-23 PASS 59 seconds
- 2025-09-24 PASS 57 seconds
- 2025-09-25 PASS 50 seconds
- 2025-09-26 PASS 50 seconds
- 2025-09-27 PASS 54 seconds
- 2025-09-28 PASS 52 seconds
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS 51 seconds
  - PASS 58 seconds
  - PASS 53 seconds
  - PASS 58 seconds
- 2025-10-01
  - PASS 51 seconds
  - PASS 56 seconds
  - PASS 54 seconds
  - PASS 53 seconds
  - PASS 52 seconds
  - PASS 55 seconds
  - PASS 57 seconds
  - PASS 57 seconds
- 2025-10-02 PASS 58 seconds