# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 00:41](#error-2026-09-10t0041070000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa1fca34ab31ba34524fa9a/clusters/test-acc-tf-c-8319743146083571527 | dev | 1012.01s
[2026-09-11 06:41](#error-2026-09-11t0641230000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa3a294f7fcc4bbebf56e1c/clusters/test-acc-tf-c-2746427656661432481 | dev | 928.03s
[2026-09-12 00:41](#error-2026-09-12t0041180000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa49fae7423f4722c00365d/clusters/test-acc-tf-c-5262651143465664520 | dev | 978.08s

### Timeline
- 2026-09-07: MISSING
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 23 minutes
- 2026-09-14: MISSING
