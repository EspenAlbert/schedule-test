# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 12)
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 11809.06s
[2025-11-19 00:28](#error-2025-11-19t0028580000) |  | dev | timeout | 10804.05s
[2025-11-19 09:30](#error-2025-11-19t0930030000) |  | dev | timeout | 10803.07s
[2025-11-20 00:28](#error-2025-11-20t0028010000) |  | dev | timeout | 10803.04s
[2025-11-20 10:01](#error-2025-11-20t1001560000) | OUT_OF_CAPACITY /api/atlas/v2/groups/691ee710efafe847b127fc17/clusters | dev | out_of_capacity | 4.03s
[2025-11-21 00:28](#error-2025-11-21t0028280000) |  | dev | timeout | 10804.01s
[2025-11-22 00:26](#error-2025-11-22t0026560000) |  | dev | timeout | 10803.04s
[2025-11-24 00:30](#error-2025-11-24t0030090000) |  | dev | timeout | 10804.03s
[2025-11-25 00:27](#error-2025-11-25t0027220000) |  | dev | timeout | 10803.05s
[2025-11-26 00:28](#error-2025-11-26t0028400000) |  | dev | timeout | 10804.05s
[2025-11-27 00:28](#error-2025-11-27t0028260000) |  | dev | timeout | 10803.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 45 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3896773Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-30T00:29:52.4849202Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-30T03:46:41.7279738Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-30T03:46:41.7280753Z     resource_test.go:198: Step 2/3 error: Error running apply: exit status 1
2025-10-30T03:46:41.7281437Z         
2025-10-30T03:46:41.7282080Z         Error: Error in delete
2025-10-30T03:46:41.7282483Z         
2025-10-30T03:46:41.7283010Z         cluster=test-acc-tf-c-7618741531177568821 didn't reach desired state:
2025-10-30T03:46:41.7283696Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:46:41.7284290Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:42.0273047Z   
2025-10-30T03:46:42.0273783Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:42.0274226Z         
2025-10-30T03:46:42.0274475Z         Error: Error in delete
2025-10-30T03:46:42.0274718Z         
2025-10-30T03:46:42.0275126Z         cluster name: test-acc-tf-c-7618741531177568821, API error details:
2025-10-30T03:46:42.0275978Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11de2dc7470847b8fef/clusters/test-acc-tf-c-7618741531177568821
2025-10-30T03:46:42.0276625Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T03:46:42.0277090Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T03:46:42.0277822Z         test-acc-tf-c-7618741531177568821 has already been requested for deletion.
2025-10-30T03:46:42.0278418Z         Reason: Bad Request. Params: [test-acc-tf-c-7618741531177568821],
2025-10-30T03:46:42.0278812Z         BadRequestDetail: 
2025-10-30T03:46:42.0279198Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (11809.55s)
```

- 2025-10-31 PASS 44 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 38 minutes
- 2025-11-04 PASS 40 minutes
- 2025-11-05
  - PASS 41 minutes
  - PASS 36 minutes
- 2025-11-06 PASS 52 minutes
- 2025-11-07 PASS 44 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 40 minutes
- 2025-11-11 PASS 40 minutes
- 2025-11-12 PASS 45 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 48 minutes
- 2025-11-15 PASS 39 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 40 minutes
- 2025-11-18 PASS 36 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:58+00:00
```
2025-11-19T00:28:58.0393925Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-19T00:35:20.7307183Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-19T03:35:25.2268159Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-19T03:35:25.2268896Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-19T03:35:25.2269626Z         
2025-11-19T03:35:25.2269921Z         Error: Error in create
2025-11-19T03:35:25.2270192Z         
2025-11-19T03:35:25.2270672Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:25.2271422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:25.2272120Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:25.2272428Z         
2025-11-19T03:35:25.2272970Z         cluster=test-acc-tf-c-901790708626508985 didn't reach desired state: IDLE,
2025-11-19T03:35:25.2273451Z         error: context deadline exceeded
2025-11-19T03:35:25.2695185Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10804.54s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:03+00:00
```
2025-11-19T09:30:03.0190900Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-19T09:31:55.5696196Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-19T12:31:59.1909425Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-19T12:31:59.1910165Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-19T12:31:59.1910938Z         
2025-11-19T12:31:59.1911202Z         Error: Error in create
2025-11-19T12:31:59.1911438Z         
2025-11-19T12:31:59.1911919Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:31:59.1912566Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:31:59.1913448Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:31:59.1913784Z         
2025-11-19T12:31:59.1914350Z         cluster=test-acc-tf-c-2940112374273047625 didn't reach desired state: IDLE,
2025-11-19T12:31:59.1914815Z         error: context deadline exceeded
2025-11-19T12:31:59.2317334Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10803.67s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:01+00:00
```
2025-11-20T00:28:01.5628336Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-20T00:29:55.6003925Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-20T03:29:58.8875379Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-20T03:29:58.8876363Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-20T03:29:58.8876973Z         
2025-11-20T03:29:58.8877389Z         Error: Error in create
2025-11-20T03:29:58.8877787Z         
2025-11-20T03:29:58.8878267Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:29:58.8879229Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:29:58.8880110Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:29:58.8880595Z         
2025-11-20T03:29:58.8881334Z         cluster=test-acc-tf-c-8419711123308902121 didn't reach desired state: IDLE,
2025-11-20T03:29:58.8882338Z         error: context deadline exceeded
2025-11-20T03:29:58.8888747Z   
2025-11-20T03:29:58.9525513Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10803.37s)
```

  - FAIL 4 seconds

### Error 2025-11-20T10:01:56+00:00
```
2025-11-20T10:01:56.0806787Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-20T10:03:33.6806498Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-20T10:03:37.8195487Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-20T10:03:37.8196821Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-20T10:03:37.8197581Z         
2025-11-20T10:03:37.8198513Z         Error: Error in create
2025-11-20T10:03:37.8199065Z         
2025-11-20T10:03:37.8199777Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T10:03:37.8201056Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T10:03:37.8202219Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T10:03:37.8202898Z         
2025-11-20T10:03:37.8203762Z         cluster name: test-acc-tf-c-3491486406409439915, API error details:
2025-11-20T10:03:37.8205196Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691ee710efafe847b127fc17/clusters
2025-11-20T10:03:37.8206550Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-11-20T10:03:37.8207829Z         region is currently out of capacity for the requested instance size. Reason:
2025-11-20T10:03:37.8218330Z         Conflict. Params: [], BadRequestDetail: 
2025-11-20T10:03:37.9584291Z    test_name=TestAccMockableAdvancedCluster_symmetricSharded test_terraform_path=/home/runner/work/_temp/0ded2230-e9ea-4553-8f7f-1463f6ed3fd4/terraform test_working_directory=/tmp/plugintest1290290235 test_step_number=1
2025-11-20T10:03:37.9649303Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (4.27s)
```

- 2025-11-21

### Error 2025-11-21T00:28:28+00:00
```
2025-11-21T00:28:28.2285389Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-21T00:30:22.6554469Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-21T03:30:26.7609670Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-21T03:30:26.7610357Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-21T03:30:26.7610762Z         
2025-11-21T03:30:26.7611015Z         Error: Error in create
2025-11-21T03:30:26.7611354Z         
2025-11-21T03:30:26.7611683Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:26.7612451Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:26.7613145Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:26.7613445Z         
2025-11-21T03:30:26.7614071Z         cluster=test-acc-tf-c-8469193301755905060 didn't reach desired state: IDLE,
2025-11-21T03:30:26.7614640Z         error: context deadline exceeded
2025-11-21T03:30:26.8050940Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10804.15s)
```

- 2025-11-22

### Error 2025-11-22T00:26:56+00:00
```
2025-11-22T00:26:56.2520014Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-22T00:28:42.9646935Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-22T03:28:46.3394912Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-22T03:28:46.3395624Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-22T03:28:46.3396013Z         
2025-11-22T03:28:46.3396466Z         Error: Error in create
2025-11-22T03:28:46.3396720Z         
2025-11-22T03:28:46.3397109Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:46.3397801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:46.3398691Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:46.3399249Z         
2025-11-22T03:28:46.3399973Z         cluster=test-acc-tf-c-8128648166667083431 didn't reach desired state: IDLE,
2025-11-22T03:28:46.3400531Z         error: context deadline exceeded
2025-11-22T03:28:46.3844916Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10803.43s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:09+00:00
```
2025-11-24T00:30:09.5160950Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-24T00:33:24.2031284Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-24T03:33:28.4524880Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-24T03:33:28.4525674Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-24T03:33:28.4526146Z         
2025-11-24T03:33:28.4526405Z         Error: Error in create
2025-11-24T03:33:28.4526690Z         
2025-11-24T03:33:28.4527070Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:28.4527815Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:28.4528508Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:28.4528823Z         
2025-11-24T03:33:28.4529389Z         cluster=test-acc-tf-c-3147138785575145084 didn't reach desired state: IDLE,
2025-11-24T03:33:28.4530026Z         error: context deadline exceeded
2025-11-24T03:33:28.4998738Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10804.30s)
```

- 2025-11-25

### Error 2025-11-25T00:27:22+00:00
```
2025-11-25T00:27:22.3500475Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-25T00:31:51.4002645Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-25T03:31:54.8384661Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-25T03:31:54.8385391Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-25T03:31:54.8385860Z         
2025-11-25T03:31:54.8386217Z         Error: Error in create
2025-11-25T03:31:54.8386548Z         
2025-11-25T03:31:54.8387090Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:54.8387807Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:54.8388390Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:54.8388786Z         
2025-11-25T03:31:54.8389441Z         cluster=test-acc-tf-c-2267843256952811778 didn't reach desired state: IDLE,
2025-11-25T03:31:54.8389935Z         error: context deadline exceeded
2025-11-25T03:31:54.8822402Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10803.48s)
```

- 2025-11-26

### Error 2025-11-26T00:28:40+00:00
```
2025-11-26T00:28:40.0231710Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-26T00:30:27.4934362Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-26T03:30:31.9301582Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-26T03:30:31.9302540Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-26T03:30:31.9303149Z         
2025-11-26T03:30:31.9303556Z         Error: Error in create
2025-11-26T03:30:31.9304233Z         
2025-11-26T03:30:31.9304803Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:31.9306156Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:31.9307300Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:31.9307874Z         
2025-11-26T03:30:31.9308903Z         cluster=test-acc-tf-c-4916472771171838129 didn't reach desired state: IDLE,
2025-11-26T03:30:31.9309747Z         error: context deadline exceeded
2025-11-26T03:30:31.9805871Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10804.49s)
```

- 2025-11-27

### Error 2025-11-27T00:28:26+00:00
```
2025-11-27T00:28:26.5454740Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-27T00:30:06.4997605Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-27T03:30:09.7782380Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-27T03:30:09.7783154Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-11-27T03:30:09.7783688Z         
2025-11-27T03:30:09.7784202Z         Error: Error in create
2025-11-27T03:30:09.7784577Z         
2025-11-27T03:30:09.7784916Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:09.7785557Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:09.7786243Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:09.7786550Z         
2025-11-27T03:30:09.7787306Z         cluster=test-acc-tf-c-8148750434285679797 didn't reach desired state: IDLE,
2025-11-27T03:30:09.7787905Z         error: context deadline exceeded
2025-11-27T03:30:09.8237948Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10803.34s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029430000) |  | qa | 5.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:43+00:00
```
2025-11-02T00:29:43.4863465Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-02T00:31:20.5693701Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-02T00:31:25.3370677Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-02T00:31:25.3371904Z     resource_test.go:198: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:31:25.3373247Z         
2025-11-02T00:31:25.3373797Z         Error: Error in create
2025-11-02T00:31:25.3374311Z         
2025-11-02T00:31:25.3375170Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.3377177Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.3378627Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.3380172Z         
2025-11-02T00:31:25.3380989Z         cluster name: test-acc-tf-c-8694877321979365975, API error details:
2025-11-02T00:31:25.3382192Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5f37d8b3f733a093e23/clusters
2025-11-02T00:31:25.3383073Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.3383963Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.3385028Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.3386084Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.3386807Z         BadRequestDetail: 
2025-11-02T00:31:25.4263203Z   
2025-11-02T00:31:25.7150548Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (5.15s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 40 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 41 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 37 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 36 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
