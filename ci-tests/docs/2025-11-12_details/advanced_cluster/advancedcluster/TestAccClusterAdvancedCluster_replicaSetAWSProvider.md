# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 36) FAIL(x 5) TIMEOUT
Success rate: 87.80%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-17 00:29](#error-2025-10-17t0029300000) |  | dev | timeout | 11733.03s
[2025-10-18 00:26](#error-2025-10-18t0026450000) |  | dev | timeout | 11666.07s
[2025-10-19 00:31](#error-2025-10-19t0031470000) |  | qa | timeout | 11692.07s
[2025-10-20 00:30](#error-2025-10-20t0030390000) |  | dev | timeout | 14115.08s
[2025-10-20 10:26](#error-2025-10-20t1026330000) |  | dev | timeout | 11565.08s
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 58 minutes
- 2025-10-05 PASS 49 minutes
- 2025-10-06 PASS 51 minutes
- 2025-10-07 PASS 57 minutes
- 2025-10-08 PASS 59 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS an hour
- 2025-10-11 PASS 58 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS an hour
- 2025-10-14 PASS 56 minutes
- 2025-10-15 PASS 56 minutes
- 2025-10-16 PASS an hour
- 2025-10-17

### Error 2025-10-17T00:29:30+00:00
```
2025-10-17T00:29:30.0841177Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-17T00:31:20.6505595Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-17T00:31:25.6455993Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-17T00:31:25.6457801Z     pre_check.go:36: Time before creating cluster: 2025-10-17T00:31:25.645356906Z, ProjectID: 68f18de665803f6549110bfb, Cluster name: test-acc-tf-c-1570566063059594748
2025-10-17T03:43:48.8749576Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-17T03:43:48.8750206Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-10-17T03:43:48.8750684Z         
2025-10-17T03:43:48.8751027Z         Error: Error in update
2025-10-17T03:43:48.8751475Z         
2025-10-17T03:43:48.8751900Z           with mongodbatlas_advanced_cluster.test,
2025-10-17T03:43:48.8752546Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-17T03:43:48.8753136Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-17T03:43:48.8753442Z         
2025-10-17T03:43:48.8753904Z         cluster=test-acc-tf-c-1570566063059594748 didn't reach desired state: IDLE,
2025-10-17T03:43:48.8754512Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-17T03:43:48.8754935Z         'UPDATING', timeout: 3h0m0s)
2025-10-17T03:46:53.9117066Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11733.27s)
```

- 2025-10-18

### Error 2025-10-18T00:26:45+00:00
```
2025-10-18T00:26:45.1956707Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-18T00:28:20.4698046Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-18T00:29:00.4631379Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-18T00:29:00.4633284Z     pre_check.go:36: Time before creating cluster: 2025-10-18T00:29:00.462820131Z, ProjectID: 68f2dec13c4aee113d179857, Cluster name: test-acc-tf-c-8022503660195388742
2025-10-18T03:39:13.7312250Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-18T03:39:13.7312953Z     resource_test.go:113: Step 2/4 error: Error running apply: exit status 1
2025-10-18T03:39:13.7313315Z         
2025-10-18T03:39:13.7313728Z         Error: Error in update
2025-10-18T03:39:13.7314137Z         
2025-10-18T03:39:13.7314663Z           with mongodbatlas_advanced_cluster.test,
2025-10-18T03:39:13.7315978Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-18T03:39:13.7317060Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-18T03:39:13.7317591Z         
2025-10-18T03:39:13.7318368Z         cluster=test-acc-tf-c-8022503660195388742 didn't reach desired state: IDLE,
2025-10-18T03:39:13.7319408Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-18T03:39:13.7320434Z         'UPDATING', timeout: 3h0m0s)
2025-10-18T03:42:47.1639799Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11666.70s)
```

- 2025-10-19

### Error 2025-10-19T00:31:47+00:00
```
2025-10-19T00:31:47.3467108Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-19T00:33:24.9200895Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-19T00:33:34.9037690Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-19T00:33:34.9041876Z     pre_check.go:36: Time before creating cluster: 2025-10-19T00:33:34.903339444Z, ProjectID: 68f4316f353f113dafd145c9, Cluster name: test-acc-tf-c-1446720269105477950
2025-10-19T03:44:44.5522957Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-19T03:44:44.5523843Z     resource_test.go:113: Step 2/4 error: Error running apply: exit status 1
2025-10-19T03:44:44.5524446Z         
2025-10-19T03:44:44.5524870Z         Error: Error in update
2025-10-19T03:44:44.5525279Z         
2025-10-19T03:44:44.5525857Z           with mongodbatlas_advanced_cluster.test,
2025-10-19T03:44:44.5526991Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-19T03:44:44.5528016Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-19T03:44:44.5528556Z         
2025-10-19T03:44:44.5529369Z         cluster=test-acc-tf-c-1446720269105477950 didn't reach desired state: IDLE,
2025-10-19T03:44:44.5530463Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-19T03:44:44.5531212Z         'UPDATING', timeout: 3h0m0s)
2025-10-19T03:48:17.5543746Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11692.65s)
```

- 2025-10-20
  - FAIL 3 hours

### Error 2025-10-20T00:30:39+00:00
```
2025-10-20T00:30:39.3906654Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T00:32:27.5798349Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T00:33:17.5162946Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T00:33:17.5164894Z     pre_check.go:36: Time before creating cluster: 2025-10-20T00:33:17.515954911Z, ProjectID: 68f582aa7e56882d517c21a2, Cluster name: test-acc-tf-c-8218674903909627456
2025-10-20T04:24:40.4558711Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T04:24:40.4559716Z     resource_test.go:113: Step 2/4 error: Error running apply: exit status 1
2025-10-20T04:24:40.4560096Z         
2025-10-20T04:24:40.4560358Z         Error: Error in update
2025-10-20T04:24:40.4560603Z         
2025-10-20T04:24:40.4560932Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T04:24:40.4561894Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T04:24:40.4562550Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T04:24:40.4562865Z         
2025-10-20T04:24:40.4563314Z         cluster=test-acc-tf-c-8218674903909627456 didn't reach desired state: IDLE,
2025-10-20T04:24:40.4564505Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-20T04:24:40.4564965Z         'UPDATING', timeout: 3h0m0s)
2025-10-20T04:27:43.3655078Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (14115.85s)
```

  - FAIL 3 hours

### Error 2025-10-20T10:26:33+00:00
```
2025-10-20T10:26:33.3042772Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T10:28:27.7297924Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T10:28:52.7234508Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T10:28:52.7236454Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:28:52.723165642Z, ProjectID: 68f60e565a13b66d7cb69f9c, Cluster name: test-acc-tf-c-2287281202127960534
2025-10-20T13:38:39.6659097Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-20T13:38:39.6659714Z     resource_test.go:113: Step 2/4 error: Error running apply: exit status 1
2025-10-20T13:38:39.6660102Z         
2025-10-20T13:38:39.6660369Z         Error: Error in update
2025-10-20T13:38:39.6660617Z         
2025-10-20T13:38:39.6661135Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T13:38:39.6661947Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T13:38:39.6662546Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T13:38:39.6662865Z         
2025-10-20T13:38:39.6663320Z         cluster=test-acc-tf-c-2287281202127960534 didn't reach desired state: IDLE,
2025-10-20T13:38:39.6663938Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-20T13:38:39.6664378Z         'UPDATING', timeout: 3h0m0s)
2025-10-20T13:41:13.4920963Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11565.77s)
```

- 2025-10-21 PASS 52 minutes
- 2025-10-22
  - PASS an hour
  - PASS 53 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 2 hours
- 2025-10-26 PASS 53 minutes
- 2025-10-27 PASS 2 hours
- 2025-10-28 PASS an hour
- 2025-10-29 PASS an hour
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3893173Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T00:29:52.4994157Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T00:30:42.4701806Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T00:30:42.4703550Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:42.46989372Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-8242992937060996441
2025-10-30T03:42:26.1080050Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T03:42:26.1080827Z     resource_test.go:113: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:42:26.1081296Z         
2025-10-30T03:42:26.1081784Z         Error: Error in update
2025-10-30T03:42:26.1082043Z         
2025-10-30T03:42:26.1082370Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:42:26.1083113Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:42:26.1083804Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:42:26.1084106Z         
2025-10-30T03:42:26.1084661Z         cluster=test-acc-tf-c-8242992937060996441 didn't reach desired state: IDLE,
2025-10-30T03:42:26.1085363Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:42:26.1085885Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:42:43.7096688Z   
2025-10-30T05:28:11.5680863Z 		TestAccClusterAdvancedCluster_pausedToUnpaused (4h58m19s)
2025-10-30T05:28:11.5681959Z 		TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4h58m19s)
2025-10-30T05:28:11.5683140Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h58m19s)
```

- 2025-10-31 PASS 58 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 53 minutes
- 2025-11-03 PASS 59 minutes
- 2025-11-04 PASS 59 minutes
- 2025-11-05
  - PASS an hour
  - PASS 57 minutes
- 2025-11-06 PASS an hour
- 2025-11-07 PASS 59 minutes
- 2025-11-08 PASS an hour
- 2025-11-09 PASS 50 minutes
- 2025-11-10 PASS 52 minutes
- 2025-11-11 PASS 54 minutes
- 2025-11-12 PASS 58 minutes