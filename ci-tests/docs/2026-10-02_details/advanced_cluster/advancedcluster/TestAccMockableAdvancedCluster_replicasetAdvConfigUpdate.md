# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 00:41](#error-2026-09-10t0041070000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa1fca34ab31ba34524fa9a/clusters/test-acc-tf-c-8319743146083571527 | dev | 1012.01s
[2026-09-11 06:41](#error-2026-09-11t0641230000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa3a294f7fcc4bbebf56e1c/clusters/test-acc-tf-c-2746427656661432481 | dev | 928.03s
[2026-09-12 00:41](#error-2026-09-12t0041180000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa49fae7423f4722c00365d/clusters/test-acc-tf-c-5262651143465664520 | dev | 978.08s
[2026-09-23 00:40](#error-2026-09-23t0040290000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6ab31ffdd27ba93df6422422/clusters/test-acc-tf-c-9080770712707654399 | dev | 926.03s
[2026-09-23 08:26](#error-2026-09-23t0826120000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6ab38d24f8a29abe23592472/clusters/test-acc-tf-c-6838851762163606468 | dev | 856.10s
[2026-09-24 00:42](#error-2026-09-24t0042510000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6ab4720b8381f5e702b6b4f4/clusters/test-acc-tf-c-9045824294347705066 | dev | 983.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 28 minutes
- 2026-09-03
  - PASS 34 minutes
  - PASS 39 minutes
- 2026-09-04 PASS 36 minutes
- 2026-09-05 PASS 28 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 25 minutes
- 2026-09-08 PASS 30 minutes
- 2026-09-09 PASS 27 minutes
- 2026-09-10

### Error 2026-09-10T00:41:07+00:00
```
2026-09-10T00:41:07.5056989Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-10T00:41:10.9929907Z     resource_test.go:991: Adding variable groupId=6aa1fca34ab31ba34524fa9a
2026-09-10T00:41:10.9933099Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-8319743146083571527
2026-09-10T00:42:25.2615034Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-10T00:57:05.8842197Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-10T00:57:05.8843501Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6720785933130212270
2026-09-10T00:57:06.3962073Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5011566046193183997
2026-09-10T00:57:06.6736783Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8859440602002341386
2026-09-10T00:57:12.2371548Z    test_terraform_path=/home/runner/work/_temp/2904a11e-a9ae-41b4-90d9-d2f547e686bd/terraform test_working_directory=/tmp/plugintest3278270149 test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_step_number=2
2026-09-10T00:57:12.2372935Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-09-10T00:57:12.2373484Z         
2026-09-10T00:57:12.2373776Z         Error: Error in update
2026-09-10T00:57:12.2374060Z         
2026-09-10T00:57:12.2374415Z           with mongodbatlas_advanced_cluster.test,
2026-09-10T00:57:12.2375519Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-10T00:57:12.2376381Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-10T00:57:12.2376789Z         
2026-09-10T00:57:12.2377255Z         cluster name: test-acc-tf-c-8319743146083571527, API error details:
2026-09-10T00:57:12.2378419Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fca34ab31ba34524fa9a/clusters/test-acc-tf-c-8319743146083571527
2026-09-10T00:57:12.2379273Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-10T00:57:12.2379962Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-10T00:57:12.2380628Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-10T00:57:12.2381461Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-10T00:57:12.2382096Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-10T00:59:13.5896159Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1012.09s)
```

- 2026-09-11
  - PASS an hour
  - FAIL 15 minutes

### Error 2026-09-11T06:41:23+00:00
```
2026-09-11T06:41:23.9715602Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-11T06:41:26.4213610Z     resource_test.go:991: Adding variable groupId=6aa3a294f7fcc4bbebf56e1c
2026-09-11T06:41:26.4217127Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-2746427656661432481
2026-09-11T06:42:51.0571600Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-11T06:56:05.2300936Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-11T06:56:05.2302770Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-197716162976227680
2026-09-11T06:56:06.0970626Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5778542415762535955
2026-09-11T06:56:06.5069550Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2891408384237964403
2026-09-11T06:56:14.3030414Z   
2026-09-11T06:56:14.3030868Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-09-11T06:56:14.3031392Z         
2026-09-11T06:56:14.3031705Z         Error: Error in update
2026-09-11T06:56:14.3031981Z         
2026-09-11T06:56:14.3032333Z           with mongodbatlas_advanced_cluster.test,
2026-09-11T06:56:14.3033319Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-11T06:56:14.3034261Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-11T06:56:14.3034618Z         
2026-09-11T06:56:14.3035196Z         cluster name: test-acc-tf-c-2746427656661432481, API error details:
2026-09-11T06:56:14.3036119Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa3a294f7fcc4bbebf56e1c/clusters/test-acc-tf-c-2746427656661432481
2026-09-11T06:56:14.3036975Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-11T06:56:14.3037674Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-11T06:56:14.3038348Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-11T06:56:14.3039024Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-11T06:56:14.3039639Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-11T06:58:15.9463193Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (928.31s)
```

- 2026-09-12

### Error 2026-09-12T00:41:18+00:00
```
2026-09-12T00:41:18.2946249Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-12T00:41:21.2288621Z     resource_test.go:991: Adding variable groupId=6aa49fae7423f4722c00365d
2026-09-12T00:41:21.2289420Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-5262651143465664520
2026-09-12T00:42:35.2710082Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-12T00:56:44.4136555Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-12T00:56:44.4138132Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6266103755631808559
2026-09-12T00:56:44.5704475Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-2919980742342164373
2026-09-12T00:56:44.7333194Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6981757362064996289
2026-09-12T00:56:49.3012523Z   
2026-09-12T00:56:49.3013078Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-09-12T00:56:49.3013616Z         
2026-09-12T00:56:49.3013969Z         Error: Error in update
2026-09-12T00:56:49.3014305Z         
2026-09-12T00:56:49.3014783Z           with mongodbatlas_advanced_cluster.test,
2026-09-12T00:56:49.3015698Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-12T00:56:49.3016661Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-12T00:56:49.3017260Z         
2026-09-12T00:56:49.3017844Z         cluster name: test-acc-tf-c-5262651143465664520, API error details:
2026-09-12T00:56:49.3019912Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa49fae7423f4722c00365d/clusters/test-acc-tf-c-5262651143465664520
2026-09-12T00:56:49.3021324Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-12T00:56:49.3022397Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-12T00:56:49.3023361Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-12T00:56:49.3024391Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-12T00:56:49.3025619Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-12T00:58:50.5728743Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (978.83s)
```

- 2026-09-13: MISSING
- 2026-09-14 PASS 30 minutes
- 2026-09-15 PASS 33 minutes
- 2026-09-16 PASS 30 minutes
- 2026-09-17 PASS 29 minutes
- 2026-09-18 PASS 32 minutes
- 2026-09-19 PASS 34 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 27 minutes
- 2026-09-22
  - PASS 29 minutes
  - PASS 30 minutes
- 2026-09-23
  - FAIL 15 minutes

### Error 2026-09-23T00:40:29+00:00
```
2026-09-23T00:40:29.3926897Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-23T00:40:31.5562128Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-9080770712707654399
2026-09-23T00:40:31.5562741Z     resource_test.go:991: Adding variable groupId=6ab31ffdd27ba93df6422422
2026-09-23T00:41:55.1362607Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-23T00:55:37.9234129Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-23T00:55:37.9234812Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-1028287284818636617
2026-09-23T00:55:38.3741657Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8313883071499322401
2026-09-23T00:55:39.2684656Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6637262705654486059
2026-09-23T00:55:47.7588656Z    test_terraform_path=/home/runner/work/_temp/a2eebd27-2b58-42fb-a8db-65eaf8df6161/terraform test_working_directory=/tmp/plugintest1016549729 test_step_number=2 test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-23T00:55:47.7589468Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-09-23T00:55:47.7589700Z         
2026-09-23T00:55:47.7591231Z         Error: Error in update
2026-09-23T00:55:47.7591491Z         
2026-09-23T00:55:47.7591816Z           with mongodbatlas_advanced_cluster.test,
2026-09-23T00:55:47.7592407Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-23T00:55:47.7592969Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-23T00:55:47.7593508Z         
2026-09-23T00:55:47.7593905Z         cluster name: test-acc-tf-c-9080770712707654399, API error details:
2026-09-23T00:55:47.7594686Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab31ffdd27ba93df6422422/clusters/test-acc-tf-c-9080770712707654399
2026-09-23T00:55:47.7595420Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-23T00:55:47.7596198Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T00:55:47.7596795Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-23T00:55:47.7597386Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T00:55:47.7597909Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-23T00:57:08.1965846Z    test_step_number=5 test_name=TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade test_terraform_path=/home/runner/work/_temp/a2eebd27-2b58-42fb-a8db-65eaf8df6161/terraform test_working_directory=/tmp/plugintest2611019424
2026-09-23T00:57:19.2865337Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (926.34s)
```

  - FAIL 14 minutes

### Error 2026-09-23T08:26:12+00:00
```
2026-09-23T08:26:12.6767401Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-23T08:26:16.4727710Z     resource_test.go:991: Adding variable groupId=6ab38d24f8a29abe23592472
2026-09-23T08:26:16.4731128Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-6838851762163606468
2026-09-23T08:42:52.7264561Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-23T08:55:28.8347776Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-23T08:55:28.8349378Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-906595139725832175
2026-09-23T08:55:30.0196904Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6632353064590214871
2026-09-23T08:55:34.8167666Z   
2026-09-23T08:55:34.8169007Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-09-23T08:55:34.8169709Z         
2026-09-23T08:55:34.8170019Z         Error: Error in update
2026-09-23T08:55:34.8170533Z         
2026-09-23T08:55:34.8172038Z           with mongodbatlas_advanced_cluster.test,
2026-09-23T08:55:34.8173440Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-23T08:55:34.8174715Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-23T08:55:34.8175401Z         
2026-09-23T08:55:34.8176245Z         cluster name: test-acc-tf-c-6838851762163606468, API error details:
2026-09-23T08:55:34.8177974Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab38d24f8a29abe23592472/clusters/test-acc-tf-c-6838851762163606468
2026-09-23T08:55:34.8179625Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-23T08:55:34.8181229Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T08:55:34.8182585Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-23T08:55:34.8184172Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T08:55:34.8185370Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-23T08:57:05.9114113Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (856.98s)
```

- 2026-09-24

### Error 2026-09-24T00:42:51+00:00
```
2026-09-24T00:42:51.8539059Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-24T00:42:54.1017249Z     resource_test.go:991: Adding variable groupId=6ab4720b8381f5e702b6b4f4
2026-09-24T00:42:54.1018682Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-9045824294347705066
2026-09-24T00:44:12.0068298Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-24T00:58:24.9694476Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-09-24T00:58:24.9695824Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8277266890413936948
2026-09-24T00:58:25.2619536Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-417799027711072009
2026-09-24T00:58:25.5473357Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-3260025474696844914
2026-09-24T00:58:31.7664893Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_terraform_path=/home/runner/work/_temp/9a8d92e6-e728-4858-b160-f6e2a494a86a/terraform
2026-09-24T00:58:31.7665886Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-09-24T00:58:31.7666554Z         
2026-09-24T00:58:31.7666867Z         Error: Error in update
2026-09-24T00:58:31.7667164Z         
2026-09-24T00:58:31.7667545Z           with mongodbatlas_advanced_cluster.test,
2026-09-24T00:58:31.7668277Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-24T00:58:31.7669260Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-24T00:58:31.7669683Z         
2026-09-24T00:58:31.7670169Z         cluster name: test-acc-tf-c-9045824294347705066, API error details:
2026-09-24T00:58:31.7671599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab4720b8381f5e702b6b4f4/clusters/test-acc-tf-c-9045824294347705066
2026-09-24T00:58:31.7672528Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-24T00:58:31.7673269Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-24T00:58:31.7673995Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-24T00:58:31.7674725Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-24T00:58:31.7675369Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-24T01:00:33.2082026Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (983.51s)
```

- 2026-09-25 PASS 28 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 28 minutes
- 2026-09-29
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 30 minutes
- 2026-09-30 PASS 24 minutes
- 2026-10-01 PASS 23 minutes
- 2026-10-02 PASS 24 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 22 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 23 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 23 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 24 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 25 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 21 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
