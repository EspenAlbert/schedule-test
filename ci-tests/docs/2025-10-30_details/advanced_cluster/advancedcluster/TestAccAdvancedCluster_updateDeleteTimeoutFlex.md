# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutFlex Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 32) FAIL(x 8)
Success rate: 80.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-30 15:08](#error-2025-09-30t1508020000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dbf200ce185e38b70f0d81/flexClusters/test-acc-tf-4026581415522354496 | qa | timeout | 19.01s
[2025-10-01 00:30](#error-2025-10-01t0030010000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dc75b40c72c45ec9a90b26/flexClusters/test-acc-tf-6840828070108141604 | dev | timeout | 18.09s
[2025-10-01 03:23](#error-2025-10-01t0323590000) |  | dev | timeout | 18.02s
[2025-10-01 04:56](#error-2025-10-01t0456430000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dcb42d5a2f96450020b4cb/flexClusters/test-acc-tf-2004656689855192247 | dev | flaky_500 | 19.03s
[2025-10-01 07:30](#error-2025-10-01t0730000000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dcd8215b2d552e98f9bb7c/flexClusters/test-acc-tf-1038707880225857862 | dev | timeout | 22.03s
[2025-10-01 14:21](#error-2025-10-01t1421470000) |  | dev |  | 19.07s
[2025-10-05 00:31](#error-2025-10-05t0031260000) |  | qa |  | 4.05s
[2025-10-26 00:31](#error-2025-10-26t0031280000) |  | qa | timeout | 17.03s

## Timeline
- 2025-09-30

### Error 2025-09-30T15:08:02+00:00
```
2025-09-30T15:08:02.5601710Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:02.5678737Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:21.3467673Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:21.3468493Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T15:08:21.3469179Z         
2025-09-30T15:08:21.3469443Z         Error: Error in flex delete
2025-09-30T15:08:21.3469796Z         
2025-09-30T15:08:21.3470341Z         cluster name: test-acc-tf-4026581415522354496, API error details: timeout
2025-09-30T15:08:21.3471407Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-30T15:08:21.3471804Z         1s)
2025-09-30T15:08:21.6790725Z    test_terraform_path=/home/runner/work/_temp/ea63cb1b-093e-438d-9c0c-23475ed11321/terraform test_working_directory=/tmp/plugintest375829589 test_step_number=3 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:21.6792290Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-30T15:08:21.6792722Z         
2025-09-30T15:08:21.6792979Z         Error: Error in flex delete
2025-09-30T15:08:21.6793226Z         
2025-09-30T15:08:21.6793624Z         cluster name: test-acc-tf-4026581415522354496, API error details:
2025-09-30T15:08:21.6794692Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf200ce185e38b70f0d81/flexClusters/test-acc-tf-4026581415522354496
2025-09-30T15:08:21.6795474Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-30T15:08:21.6796108Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-30T15:08:21.6796684Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-30T15:08:21.6797120Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.12s)
```

- 2025-10-01
  - FAIL 18 seconds

### Error 2025-10-01T00:30:01+00:00
```
2025-10-01T00:30:01.0205138Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T00:30:01.0307033Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T00:30:19.5862783Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T00:30:19.5864118Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T00:30:19.5865133Z         
2025-10-01T00:30:19.5865602Z         Error: Error in flex delete
2025-10-01T00:30:19.5865870Z         
2025-10-01T00:30:19.5866438Z         cluster name: test-acc-tf-6840828070108141604, API error details: timeout
2025-10-01T00:30:19.5867191Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T00:30:19.5867582Z         1s)
2025-10-01T00:30:19.8808510Z   
2025-10-01T00:30:19.8809029Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T00:30:19.8809456Z         
2025-10-01T00:30:19.8809716Z         Error: Error in flex delete
2025-10-01T00:30:19.8809969Z         
2025-10-01T00:30:19.8810373Z         cluster name: test-acc-tf-6840828070108141604, API error details:
2025-10-01T00:30:19.8811261Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc75b40c72c45ec9a90b26/flexClusters/test-acc-tf-6840828070108141604
2025-10-01T00:30:19.8812055Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T00:30:19.8812706Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-10-01T00:30:19.8813282Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-10-01T00:30:19.8813723Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (18.85s)
```

  - FAIL 18 seconds

### Error 2025-10-01T03:23:59+00:00
```
2025-10-01T03:23:59.4793133Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T03:23:59.4914942Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T03:24:16.0286730Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T03:24:16.0287585Z     resource_test.go:2894: Step 2/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T03:24:16.0288159Z         
2025-10-01T03:24:16.0288586Z         Error: error updating flex cluster: test-acc-tf-6204249610793280964
2025-10-01T03:24:16.0289056Z         
2025-10-01T03:24:16.0289384Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T03:24:16.0290175Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T03:24:16.0290900Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T03:24:16.0291257Z         
2025-10-01T03:24:16.0292058Z         unexpected state 'CREATING', wanted target 'IDLE'. last error: %!s(<nil>)
2025-10-01T03:24:17.6437292Z   
2025-10-01T03:24:17.6438112Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T03:24:17.6438827Z         
2025-10-01T03:24:17.6439242Z         Error: Error in flex delete
2025-10-01T03:24:17.6439648Z         
2025-10-01T03:24:17.6440920Z         cluster name: test-acc-tf-6204249610793280964, API error details: timeout
2025-10-01T03:24:17.6442191Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T03:24:17.6442818Z         1s)
2025-10-01T03:24:17.6443301Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (18.16s)
```

  - FAIL 19 seconds

### Error 2025-10-01T04:56:43+00:00
```
2025-10-01T04:56:43.0197561Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T04:56:43.0295647Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T04:57:02.0088548Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T04:57:02.0089760Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T04:57:02.0090606Z         
2025-10-01T04:57:02.0091047Z         Error: Error in flex delete
2025-10-01T04:57:02.0091425Z         
2025-10-01T04:57:02.0091864Z         cluster name: test-acc-tf-2004656689855192247, API error details: timeout
2025-10-01T04:57:02.0092658Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T04:57:02.0093190Z         1s)
2025-10-01T04:57:02.3250027Z   
2025-10-01T04:57:02.3250720Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T04:57:02.3251159Z         
2025-10-01T04:57:02.3251429Z         Error: Error in flex delete
2025-10-01T04:57:02.3251687Z         
2025-10-01T04:57:02.3252091Z         cluster name: test-acc-tf-2004656689855192247, API error details:
2025-10-01T04:57:02.3252974Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcb42d5a2f96450020b4cb/flexClusters/test-acc-tf-2004656689855192247
2025-10-01T04:57:02.3254111Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T04:57:02.3254759Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-10-01T04:57:02.3255338Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-10-01T04:57:02.3255781Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.30s)
```

  - FAIL 22 seconds

### Error 2025-10-01T07:30:00+00:00
```
2025-10-01T07:30:00.8525560Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T07:30:00.8668614Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T07:30:22.5753052Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T07:30:22.5754284Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T07:30:22.5754997Z         
2025-10-01T07:30:22.5755277Z         Error: Error in flex delete
2025-10-01T07:30:22.5755548Z         
2025-10-01T07:30:22.5756106Z         cluster name: test-acc-tf-1038707880225857862, API error details: timeout
2025-10-01T07:30:22.5756864Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T07:30:22.5757325Z         1s)
2025-10-01T07:30:23.1315859Z    test_step_number=3 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex test_terraform_path=/home/runner/work/_temp/fac34d8f-e8a1-4d27-bbca-54dc189c82a4/terraform test_working_directory=/tmp/plugintest286521140
2025-10-01T07:30:23.1317467Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T07:30:23.1317992Z         
2025-10-01T07:30:23.1318300Z         Error: Error in flex delete
2025-10-01T07:30:23.1318606Z         
2025-10-01T07:30:23.1319089Z         cluster name: test-acc-tf-1038707880225857862, API error details:
2025-10-01T07:30:23.1320179Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcd8215b2d552e98f9bb7c/flexClusters/test-acc-tf-1038707880225857862
2025-10-01T07:30:23.1321126Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T07:30:23.1321768Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-10-01T07:30:23.1322360Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-10-01T07:30:23.1322818Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (22.27s)
```

  - PASS 21 seconds
  - PASS 21 seconds
  - PASS 20 seconds
  - FAIL 19 seconds

### Error 2025-10-01T14:21:47+00:00
```
2025-10-01T14:21:47.1168461Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T14:21:47.1230467Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T14:22:06.8022940Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T14:22:06.8023813Z     resource_test.go:2896: Step 4/4 error: Error running pre-apply plan: exit status 1
2025-10-01T14:22:06.8024329Z         
2025-10-01T14:22:06.8024747Z         Error: Unsupported block type
2025-10-01T14:22:06.8025017Z         
2025-10-01T14:22:06.8025729Z           on terraform_plugin_test.tf line 12:
2025-10-01T14:22:06.8026052Z           12: 		removed {
2025-10-01T14:22:06.8026351Z         
2025-10-01T14:22:06.8026779Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-10-01T14:22:06.8278538Z   
2025-10-01T14:22:06.8278999Z     panic.go:615: Error retrieving state, there may be dangling resources: exit status 1
2025-10-01T14:22:06.8279401Z         
2025-10-01T14:22:06.8279675Z         Error: Unsupported block type
2025-10-01T14:22:06.8279941Z         
2025-10-01T14:22:06.8280243Z           on terraform_plugin_test.tf line 12:
2025-10-01T14:22:06.8280563Z           12: 		removed {
2025-10-01T14:22:06.8280788Z         
2025-10-01T14:22:06.8281199Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-10-01T14:22:06.8281660Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.71s)
```

- 2025-10-02 PASS 19 seconds
- 2025-10-03 PASS 22 seconds
- 2025-10-04 PASS 20 seconds
- 2025-10-05

### Error 2025-10-05T00:31:26+00:00
```
2025-10-05T00:31:26.3837838Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-05T00:31:26.4135680Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-05T00:31:30.7441871Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-05T00:31:30.7443165Z     resource_test.go:2896: Step 1/4 error: Error running apply: exit status 1
2025-10-05T00:31:30.7443845Z         
2025-10-05T00:31:30.7479798Z         Error: error creating flex cluster: Cluster name test-acc-tf-3638054612423725528 (project_id=68e1bc02f758b3057a1af960).
2025-10-05T00:31:30.7480739Z         
2025-10-05T00:31:30.7481328Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.7482475Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.7483581Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.7484621Z         
2025-10-05T00:31:30.7485719Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bc02f758b3057a1af960/flexClusters
2025-10-05T00:31:30.7486669Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.7487560Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.7488645Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.7489683Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.7490410Z         BadRequestDetail: 
2025-10-05T00:31:30.7878368Z    test_name=TestAccAdvancedCluster_moveBasic
2025-10-05T00:31:30.9123609Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (4.52s)
```

- 2025-10-06 PASS 19 seconds
- 2025-10-07 PASS 49 seconds
- 2025-10-08 PASS a minute
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12 PASS 14 seconds
- 2025-10-13 PASS 22 seconds
- 2025-10-14 PASS 30 seconds
- 2025-10-15 PASS 20 seconds
- 2025-10-16 PASS 19 seconds
- 2025-10-17 PASS 32 seconds
- 2025-10-18 PASS 19 seconds
- 2025-10-19 PASS 29 seconds
- 2025-10-20
  - PASS 28 seconds
  - PASS 29 seconds
- 2025-10-21 PASS 19 seconds
- 2025-10-22
  - PASS 32 seconds
  - PASS 20 seconds
- 2025-10-23 PASS 28 seconds
- 2025-10-24 PASS 19 seconds
- 2025-10-25 PASS 18 seconds
- 2025-10-26

### Error 2025-10-26T00:31:28+00:00
```
2025-10-26T00:31:28.3701499Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:28.3735704Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:44.1578154Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:44.1578857Z     resource_test.go:2885: Step 2/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-26T00:31:44.1579319Z         
2025-10-26T00:31:44.1579732Z         Error: error updating flex cluster: test-acc-tf-7606851970589040569
2025-10-26T00:31:44.1580361Z         
2025-10-26T00:31:44.1580748Z           with mongodbatlas_advanced_cluster.test,
2025-10-26T00:31:44.1581384Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-26T00:31:44.1581971Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-26T00:31:44.1582283Z         
2025-10-26T00:31:44.1583015Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b8c328f9755b2cebca0/flexClusters/test-acc-tf-7606851970589040569
2025-10-26T00:31:44.1583853Z         PATCH: HTTP 403 Forbidden (Error code:
2025-10-26T00:31:44.1584421Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-26T00:31:44.1585114Z         Configuration. Contains selections that are unavailable due to your
2025-10-26T00:31:44.1585865Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-26T00:31:44.1586810Z         BadRequestDetail: 
2025-10-26T00:31:45.7053106Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:45.7053748Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-26T00:31:45.7054175Z         
2025-10-26T00:31:45.7054430Z         Error: Error in flex delete
2025-10-26T00:31:45.7054836Z         
2025-10-26T00:31:45.7055255Z         cluster name: test-acc-tf-7606851970589040569, API error details: timeout
2025-10-26T00:31:45.7055870Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-26T00:31:45.7056249Z         1s)
2025-10-26T00:31:45.7056553Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (17.33s)
```

- 2025-10-27 PASS 20 seconds
- 2025-10-28 PASS 30 seconds
- 2025-10-29 PASS 22 seconds
- 2025-10-30 PASS 18 seconds