# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 31) FAIL(x 8)
Success rate: 79.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:32](#error-2025-06-29t0032170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860899349709c3a5a3c9168/limits | qa | flaky_500 | 1445.07s
[2025-07-06 00:32](#error-2025-07-06t0032040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c406690ae45e168bd08d/limits | qa | flaky_500 | 35.05s
[2025-07-10 13:07](#error-2025-07-10t1307090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb00006d8d55bb9e6670/limits | qa | flaky_500 | 1033.02s
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 10807.02s
[2025-07-13 00:32](#error-2025-07-13t0032100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe8c207f45617104097f/limits | qa | flaky_500 | 850.02s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10806.02s
[2025-07-20 00:32](#error-2025-07-20t0032570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393b823af9166ef9138f/limits | qa | flaky_500 | 834.08s
[2025-07-23 13:23](#error-2025-07-23t1323170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880e2470afa8a5c60505fdb/limits | qa | flaky_500 | 846.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 21 minutes
- 2025-06-26 PASS 22 minutes
- 2025-06-27 PASS 21 minutes
- 2025-06-28 PASS 21 minutes
- 2025-06-29

### Error 2025-06-29T00:32:17+00:00
```
2025-06-29T00:32:17.2279499Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T00:32:17.2282731Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T00:52:49.3254440Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T00:52:49.3255229Z     resource_cluster_test.go:1398: Step 7/7 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:52:49.3255843Z         
2025-06-29T00:52:49.3256372Z         Error: error when getting project properties after create
2025-06-29T00:52:49.3256691Z         
2025-06-29T00:52:49.3256971Z           with mongodbatlas_project.test,
2025-06-29T00:52:49.3257541Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:52:49.3258069Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:52:49.3258339Z         
2025-06-29T00:52:49.3258766Z         error getting project (6860899349709c3a5a3c9168): error getting project's
2025-06-29T00:52:49.3259201Z         limits (6860899349709c3a5a3c9168):
2025-06-29T00:52:49.3259757Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860899349709c3a5a3c9168/limits
2025-06-29T00:52:49.3260401Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:52:49.3260954Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:52:49.3261321Z         BadRequestDetail: 
2025-06-29T00:56:22.9329198Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1445.71s)
```

- 2025-06-30 PASS 22 minutes
- 2025-07-01
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-07-02 PASS 21 minutes
- 2025-07-03 PASS 22 minutes
- 2025-07-04 PASS 22 minutes
- 2025-07-05 PASS 20 minutes
- 2025-07-06

### Error 2025-07-06T00:32:04+00:00
```
2025-07-06T00:32:04.2082516Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:04.2112679Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:39.6167877Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:39.6168762Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-07-06T00:32:39.6169360Z         
2025-07-06T00:32:39.6169908Z         Error: error when getting project properties after create
2025-07-06T00:32:39.6170238Z         
2025-07-06T00:32:39.6170693Z           with mongodbatlas_project.test,
2025-07-06T00:32:39.6171514Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:39.6172087Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:39.6172576Z         
2025-07-06T00:32:39.6173497Z         error getting project (6869c406690ae45e168bd08d): error getting project's
2025-07-06T00:32:39.6174140Z         limits (6869c406690ae45e168bd08d):
2025-07-06T00:32:39.6175013Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c406690ae45e168bd08d/limits
2025-07-06T00:32:39.6176204Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:39.6177192Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:39.6177852Z         BadRequestDetail: 
2025-07-06T00:32:39.6781016Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (35.47s)
```

- 2025-07-07 PASS 22 minutes
- 2025-07-08 PASS 22 minutes
- 2025-07-09 PASS 23 minutes
- 2025-07-10
  - PASS 21 minutes
  - FAIL 17 minutes

### Error 2025-07-10T13:07:09+00:00
```
2025-07-10T13:07:09.9297585Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-10T13:07:09.9302812Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-10T13:21:19.7396990Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-10T13:21:19.7397771Z     resource_cluster_test.go:1398: Step 4/7 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:21:19.7398328Z         
2025-07-10T13:21:19.7398705Z         Error: error when getting project properties after create
2025-07-10T13:21:19.7399111Z         
2025-07-10T13:21:19.7399397Z           with mongodbatlas_project.test,
2025-07-10T13:21:19.7400210Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:21:19.7400913Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:21:19.7401216Z         
2025-07-10T13:21:19.7401651Z         error getting project (686fbb00006d8d55bb9e6670): error getting project's
2025-07-10T13:21:19.7402107Z         limits (686fbb00006d8d55bb9e6670):
2025-07-10T13:21:19.7402667Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb00006d8d55bb9e6670/limits
2025-07-10T13:21:19.7403643Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:21:19.7404222Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:21:19.7404602Z         BadRequestDetail: 
2025-07-10T13:24:23.1434228Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1033.22s)
```

- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8186226Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-11T00:29:49.8188677Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-11T03:29:56.4772523Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-11T03:29:56.4773311Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-07-11T03:29:56.4773862Z         
2025-07-11T03:29:56.4775230Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:56.4776099Z         
2025-07-11T03:29:56.4776410Z           with mongodbatlas_cluster.test,
2025-07-11T03:29:56.4777123Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:29:56.4777775Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:29:56.4778070Z         
2025-07-11T03:29:56.8895217Z    test_working_directory=/tmp/plugintest3430350129 test_name=TestAccCluster_WithTags test_terraform_path=/home/runner/work/_temp/a92267c2-51a1-48fa-be94-9558573594f2/terraform
2025-07-11T03:29:56.9975149Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-11T03:29:56.9975796Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T03:29:56.9976244Z         
2025-07-11T03:29:56.9976549Z         Error: error when destroying resource
2025-07-11T03:29:56.9976831Z         
2025-07-11T03:29:56.9977169Z         error deleting project (68705b004f431f68780bdb0c):
2025-07-11T03:29:56.9977742Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdb0c
2025-07-11T03:29:56.9978226Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-11T03:29:56.9978755Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-11T03:29:56.9979376Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-11T03:29:56.9979850Z         Params: [], BadRequestDetail: 
2025-07-11T03:29:56.9980271Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10807.18s)
```

- 2025-07-12 PASS 23 minutes
- 2025-07-13

### Error 2025-07-13T00:32:10+00:00
```
2025-07-13T00:32:10.1107562Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T00:32:10.1111577Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T00:42:48.4757562Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T00:42:48.4758339Z     resource_cluster_test.go:1398: Step 1/7 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:42:48.4758792Z         
2025-07-13T00:42:48.4759250Z         Error: error when getting project properties after create
2025-07-13T00:42:48.4759913Z         
2025-07-13T00:42:48.4760442Z           with mongodbatlas_project.test,
2025-07-13T00:42:48.4761184Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:42:48.4761730Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:42:48.4762016Z         
2025-07-13T00:42:48.4762443Z         error getting project (6872fe8c207f45617104097f): error getting project's
2025-07-13T00:42:48.4762887Z         limits (6872fe8c207f45617104097f):
2025-07-13T00:42:48.4763645Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe8c207f45617104097f/limits
2025-07-13T00:42:48.4764291Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:42:48.4764851Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:42:48.4765228Z         BadRequestDetail: 
2025-07-13T00:43:09.7060627Z 2025/07/13 00:43:09 error setting `transaction_lifetime_limit_seconds` for MongoDB Cluster (): 0
2025-07-13T00:46:20.2754694Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (850.17s)
```

- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0109295Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-14T00:31:01.0114287Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-14T03:31:06.9268308Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-14T03:31:06.9269091Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-07-14T03:31:06.9269789Z         
2025-07-14T03:31:06.9270992Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:06.9271904Z         
2025-07-14T03:31:06.9272329Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:06.9272965Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:06.9273537Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:06.9274007Z         
2025-07-14T03:31:07.2636636Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-14T03:31:07.2637267Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:07.2637694Z         
2025-07-14T03:31:07.2637975Z         Error: error when destroying resource
2025-07-14T03:31:07.2638244Z         
2025-07-14T03:31:07.2638560Z         error deleting project (68744fc752cba864e5f0fc82):
2025-07-14T03:31:07.2639117Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc752cba864e5f0fc82
2025-07-14T03:31:07.2639905Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:31:07.2640425Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:31:07.2641016Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:31:07.2641440Z         Params: [], BadRequestDetail: 
2025-07-14T03:31:07.2641843Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10806.25s)
```

- 2025-07-15 PASS 24 minutes
- 2025-07-16 PASS 22 minutes
- 2025-07-17 PASS 21 minutes
- 2025-07-18 PASS 21 minutes
- 2025-07-19 PASS 21 minutes
- 2025-07-20

### Error 2025-07-20T00:32:57+00:00
```
2025-07-20T00:32:57.2498190Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T00:32:57.2589434Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T00:43:20.3230240Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T00:43:20.3231125Z     resource_cluster_test.go:1398: Step 2/7 error: Error running post-apply refresh plan: exit status 1
2025-07-20T00:43:20.3231685Z         
2025-07-20T00:43:20.3232058Z         Error: error when getting project properties after create
2025-07-20T00:43:20.3232528Z         
2025-07-20T00:43:20.3232811Z           with mongodbatlas_project.test,
2025-07-20T00:43:20.3233388Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:43:20.3234185Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:43:20.3234472Z         
2025-07-20T00:43:20.3234902Z         error getting project (687c393b823af9166ef9138f): error getting project's
2025-07-20T00:43:20.3235341Z         limits (687c393b823af9166ef9138f):
2025-07-20T00:43:20.3236145Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393b823af9166ef9138f/limits
2025-07-20T00:43:20.3236789Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:43:20.3237343Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:43:20.3237720Z         BadRequestDetail: 
2025-07-20T00:46:52.0280683Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (834.77s)
```

- 2025-07-21 PASS 21 minutes
- 2025-07-22 PASS 21 minutes
- 2025-07-23
  - PASS 22 minutes
  - PASS 23 minutes
  - FAIL 14 minutes

### Error 2025-07-23T13:23:17+00:00
```
2025-07-23T13:23:17.5243143Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T13:23:17.5254393Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T13:33:52.6066887Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T13:33:52.6067507Z     resource_cluster_test.go:1398: Step 2/7 error: Error running pre-apply plan: exit status 1
2025-07-23T13:33:52.6067915Z         
2025-07-23T13:33:52.6068290Z         Error: error when getting project properties after create
2025-07-23T13:33:52.6068615Z         
2025-07-23T13:33:52.6068899Z           with mongodbatlas_project.test,
2025-07-23T13:33:52.6069469Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-23T13:33:52.6070191Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-23T13:33:52.6070492Z         
2025-07-23T13:33:52.6071156Z         error getting project (6880e2470afa8a5c60505fdb): error getting project's
2025-07-23T13:33:52.6071833Z         limits (6880e2470afa8a5c60505fdb):
2025-07-23T13:33:52.6072400Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2470afa8a5c60505fdb/limits
2025-07-23T13:33:52.6073109Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T13:33:52.6073792Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T13:33:52.6074193Z         BadRequestDetail: 
2025-07-23T13:33:58.4131767Z    test_name=TestAccCluster_WithTags
2025-07-23T13:37:24.3974125Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (846.87s)
```

  - PASS 21 minutes
- 2025-07-24 PASS 21 minutes