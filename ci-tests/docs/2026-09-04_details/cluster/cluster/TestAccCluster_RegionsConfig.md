# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, FAIL(x 8) PASS(x 3)
Success rate: 27.27%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 03:08](#error-2026-08-28t0308380000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v1.0/groups/6a90fbb463fde9550ed1b34a/clusters/test-acc-tf-c-6314134465197998297 | dev |  | 1032.02s
[2026-08-29 00:39](#error-2026-08-29t0039040000) |  | dev | timeout | 11802.02s
[2026-08-31 00:47](#error-2026-08-31t0047150000) |  | dev | timeout | 12312.02s
[2026-09-01 00:49](#error-2026-09-01t0049590000) |  | dev | timeout | 12019.02s
[2026-09-02 00:43](#error-2026-09-02t0043120000) |  | dev | timeout | 12213.02s
[2026-09-03 00:44](#error-2026-09-03t0044060000) |  | dev | flaky_client | 8939.06s
[2026-09-03 06:31](#error-2026-09-03t0631550000) |  | dev | timeout | 11806.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 42 minutes
- 2026-08-07 PASS 47 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28

### Error 2026-08-28T03:08:38+00:00
```
2026-08-28T03:08:38.1195917Z === RUN   TestAccCluster_RegionsConfig
2026-08-28T03:08:38.1206948Z === CONT  TestAccCluster_RegionsConfig
2026-08-28T03:20:57.4105170Z === NAME  TestAccCluster_RegionsConfig
2026-08-28T03:20:57.4106111Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-28T03:20:57.4106789Z         
2026-08-28T03:20:57.4109686Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6314134465197998297): error updating MongoDB Cluster (test-acc-tf-c-6314134465197998297): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a90fbb463fde9550ed1b34a/clusters/test-acc-tf-c-6314134465197998297: 400 (request "INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS") One or more shards are being removed that consume more disk space than that available on the remaining shards.
2026-08-28T03:20:57.4112358Z         
2026-08-28T03:20:57.4114738Z           with mongodbatlas_cluster.test,
2026-08-28T03:20:57.4115842Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-28T03:20:57.4116903Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-28T03:20:57.4117456Z         
2026-08-28T03:23:02.3440106Z    test_name=TestAccCluster_basicAWS_PausedToUnpaused
2026-08-28T03:25:50.2849598Z --- FAIL: TestAccCluster_RegionsConfig (1032.16s)
```

- 2026-08-29

### Error 2026-08-29T00:39:04+00:00
```
2026-08-29T00:39:04.9564573Z === RUN   TestAccCluster_RegionsConfig
2026-08-29T00:39:04.9583914Z === CONT  TestAccCluster_RegionsConfig
2026-08-29T03:50:13.6159036Z === NAME  TestAccCluster_RegionsConfig
2026-08-29T03:50:13.6160085Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-29T03:50:13.6160549Z         
2026-08-29T03:50:13.6162178Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3243657496264092518): error updating MongoDB Cluster (test-acc-tf-c-3243657496264092518): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-29T03:50:13.6163614Z         
2026-08-29T03:50:13.6163959Z           with mongodbatlas_cluster.test,
2026-08-29T03:50:13.6164619Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-29T03:50:13.6165239Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-29T03:50:13.6165567Z         
2026-08-29T03:55:47.1348847Z --- FAIL: TestAccCluster_RegionsConfig (11802.18s)
```

- 2026-08-30: MISSING
- 2026-08-31

### Error 2026-08-31T00:47:15+00:00
```
2026-08-31T00:47:15.6741650Z === RUN   TestAccCluster_RegionsConfig
2026-08-31T00:47:15.6934803Z === CONT  TestAccCluster_RegionsConfig
2026-08-31T04:06:52.1724822Z === NAME  TestAccCluster_RegionsConfig
2026-08-31T04:06:52.1725455Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-31T04:06:52.1725970Z         
2026-08-31T04:06:52.1727531Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7614068114133940981): error updating MongoDB Cluster (test-acc-tf-c-7614068114133940981): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-31T04:06:52.1728579Z         
2026-08-31T04:06:52.1728939Z           with mongodbatlas_cluster.test,
2026-08-31T04:06:52.1729995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-31T04:06:52.1730558Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-31T04:06:52.1730882Z         
2026-08-31T04:12:27.9158298Z --- FAIL: TestAccCluster_RegionsConfig (12312.23s)
```

- 2026-09-01

### Error 2026-09-01T00:49:59+00:00
```
2026-09-01T00:49:59.2428339Z === RUN   TestAccCluster_RegionsConfig
2026-09-01T00:49:59.2437933Z === CONT  TestAccCluster_RegionsConfig
2026-09-01T04:04:43.7737536Z === NAME  TestAccCluster_RegionsConfig
2026-09-01T04:04:43.7738181Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-01T04:04:43.7738558Z         
2026-09-01T04:04:43.7739600Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4436392911543084657): error updating MongoDB Cluster (test-acc-tf-c-4436392911543084657): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-09-01T04:04:43.7740754Z         
2026-09-01T04:04:43.7741030Z           with mongodbatlas_cluster.test,
2026-09-01T04:04:43.7741546Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-01T04:04:43.7742030Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-01T04:04:43.7742288Z         
2026-09-01T04:10:18.4714953Z --- FAIL: TestAccCluster_RegionsConfig (12019.23s)
```

- 2026-09-02

### Error 2026-09-02T00:43:12+00:00
```
2026-09-02T00:43:12.0772836Z === RUN   TestAccCluster_RegionsConfig
2026-09-02T00:43:12.0782593Z === CONT  TestAccCluster_RegionsConfig
2026-09-02T04:01:39.6204337Z === NAME  TestAccCluster_RegionsConfig
2026-09-02T04:01:39.6205326Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-02T04:01:39.6206095Z         
2026-09-02T04:01:39.6208123Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7754817926503897645): error updating MongoDB Cluster (test-acc-tf-c-7754817926503897645): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-09-02T04:01:39.6209594Z         
2026-09-02T04:01:39.6209946Z           with mongodbatlas_cluster.test,
2026-09-02T04:01:39.6211639Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-02T04:01:39.6212706Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-02T04:01:39.6213172Z         
2026-09-02T04:06:45.3277024Z --- FAIL: TestAccCluster_RegionsConfig (12213.25s)
```

- 2026-09-03
  - FAIL 2 hours

### Error 2026-09-03T00:44:06+00:00
```
2026-09-03T00:44:06.4686242Z === RUN   TestAccCluster_RegionsConfig
2026-09-03T00:44:06.4955060Z === CONT  TestAccCluster_RegionsConfig
2026-09-03T03:07:31.7853238Z === NAME  TestAccCluster_RegionsConfig
2026-09-03T03:07:31.7854208Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-03T03:07:31.7854845Z         
2026-09-03T03:07:31.7858482Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3686940273303467631): error updating MongoDB Cluster (test-acc-tf-c-3686940273303467631): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a98c2d47f44bc884f4ab572/clusters/test-acc-tf-c-3686940273303467631": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-09-03T03:07:31.7860839Z         
2026-09-03T03:07:31.7861453Z           with mongodbatlas_cluster.test,
2026-09-03T03:07:31.7863580Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-03T03:07:31.7864671Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-03T03:07:31.7865272Z         
2026-09-03T03:13:06.0480925Z --- FAIL: TestAccCluster_RegionsConfig (8939.58s)
```

  - FAIL 3 hours

### Error 2026-09-03T06:31:55+00:00
```
2026-09-03T06:31:55.3841631Z === RUN   TestAccCluster_RegionsConfig
2026-09-03T06:31:55.3948601Z === CONT  TestAccCluster_RegionsConfig
2026-09-03T09:43:06.7006309Z === NAME  TestAccCluster_RegionsConfig
2026-09-03T09:43:06.7006899Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-03T09:43:06.7007353Z         
2026-09-03T09:43:06.7009388Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8503897665316190626): error updating MongoDB Cluster (test-acc-tf-c-8503897665316190626): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-09-03T09:43:06.7010586Z         
2026-09-03T09:43:06.7010901Z           with mongodbatlas_cluster.test,
2026-09-03T09:43:06.7011549Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-03T09:43:06.7012150Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-03T09:43:06.7012473Z         
2026-09-03T09:48:42.1157576Z --- FAIL: TestAccCluster_RegionsConfig (11806.72s)
```

- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-30 00:46](#error-2026-08-30t0046050000) |  | qa | timeout | 11653.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T00:46:05+00:00
```
2026-08-30T00:46:05.4599705Z === RUN   TestAccCluster_RegionsConfig
2026-08-30T00:46:05.4822388Z === CONT  TestAccCluster_RegionsConfig
2026-08-30T03:57:16.1537890Z === NAME  TestAccCluster_RegionsConfig
2026-08-30T03:57:16.1538367Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-30T03:57:16.1538843Z         
2026-08-30T03:57:16.1540091Z         Error: error updating MongoDB Cluster (test-acc-tf-c-212003131696525359): error updating MongoDB Cluster (test-acc-tf-c-212003131696525359): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-30T03:57:16.1540844Z         
2026-08-30T03:57:16.1541198Z           with mongodbatlas_cluster.test,
2026-08-30T03:57:16.1541740Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-30T03:57:16.1542402Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-30T03:57:16.1542779Z         
2026-08-30T04:00:19.2122859Z --- FAIL: TestAccCluster_RegionsConfig (11653.74s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
