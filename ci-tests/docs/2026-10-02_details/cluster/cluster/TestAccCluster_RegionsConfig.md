# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 00:43](#error-2026-09-02t0043120000) |  | dev | timeout | 12213.02s
[2026-09-03 00:44](#error-2026-09-03t0044060000) |  | dev | flaky_client | 8939.06s
[2026-09-03 06:31](#error-2026-09-03t0631550000) |  | dev | timeout | 11806.07s
[2026-09-10 00:40](#error-2026-09-10t0040570000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v1.0/groups/6aa1fc964ab31ba345247a11/clusters/test-acc-tf-c-6056652019392017125 | dev |  | 932.07s
[2026-09-11 06:40](#error-2026-09-11t0640570000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-6123820308537202014 | dev |  | 933.05s
[2026-09-23 08:25](#error-2026-09-23t0825510000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v1.0/groups/6ab38d0caa941871fb3a9346/clusters/test-acc-tf-c-7179731177786627815 | dev |  | 971.04s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS 56 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 44 minutes
  - PASS 52 minutes
- 2026-09-08 PASS 43 minutes
- 2026-09-09 PASS 54 minutes
- 2026-09-10

### Error 2026-09-10T00:40:57+00:00
```
2026-09-10T00:40:57.3091650Z === RUN   TestAccCluster_RegionsConfig
2026-09-10T00:40:57.3103096Z === CONT  TestAccCluster_RegionsConfig
2026-09-10T00:52:07.1464207Z === NAME  TestAccCluster_RegionsConfig
2026-09-10T00:52:07.1464731Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-10T00:52:07.1465299Z         
2026-09-10T00:52:07.1467723Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6056652019392017125): error updating MongoDB Cluster (test-acc-tf-c-6056652019392017125): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa1fc964ab31ba345247a11/clusters/test-acc-tf-c-6056652019392017125: 400 (request "INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS") One or more shards are being removed that consume more disk space than that available on the remaining shards.
2026-09-10T00:52:07.1469269Z         
2026-09-10T00:52:07.1469591Z           with mongodbatlas_cluster.test,
2026-09-10T00:52:07.1470717Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-10T00:52:07.1471322Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-10T00:52:07.1471645Z         
2026-09-10T00:55:01.8659438Z    test_name=TestAccCluster_basicAWS_PausedToUnpaused test_terraform_path=/home/runner/work/_temp/564b9fa6-49e0-41d6-929d-14c88cd676a5/terraform
2026-09-10T00:56:30.0182280Z --- FAIL: TestAccCluster_RegionsConfig (932.71s)
```

- 2026-09-11
  - PASS 3 hours
  - FAIL 15 minutes

### Error 2026-09-11T06:40:57+00:00
```
2026-09-11T06:40:57.7452021Z === RUN   TestAccCluster_RegionsConfig
2026-09-11T06:40:57.7460191Z === CONT  TestAccCluster_RegionsConfig
2026-09-11T06:52:08.1636431Z === NAME  TestAccCluster_RegionsConfig
2026-09-11T06:52:08.1637160Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-11T06:52:08.1637610Z         
2026-09-11T06:52:08.1640465Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6123820308537202014): error updating MongoDB Cluster (test-acc-tf-c-6123820308537202014): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-6123820308537202014: 400 (request "INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS") One or more shards are being removed that consume more disk space than that available on the remaining shards.
2026-09-11T06:52:08.1642185Z         
2026-09-11T06:52:08.1642514Z           with mongodbatlas_cluster.test,
2026-09-11T06:52:08.1643151Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-11T06:52:08.1643747Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-11T06:52:08.1644072Z         
2026-09-11T06:56:31.2876986Z --- FAIL: TestAccCluster_RegionsConfig (933.54s)
```

- 2026-09-12 PASS 53 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 53 minutes
- 2026-09-15 PASS 43 minutes
- 2026-09-16 PASS 39 minutes
- 2026-09-17 PASS 43 minutes
- 2026-09-18 PASS 50 minutes
- 2026-09-19 PASS 43 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 47 minutes
- 2026-09-22 PASS 45 minutes
- 2026-09-23
  - PASS 25 minutes
  - FAIL 16 minutes

### Error 2026-09-23T08:25:51+00:00
```
2026-09-23T08:25:51.2502703Z === RUN   TestAccCluster_RegionsConfig
2026-09-23T08:25:51.2529774Z === CONT  TestAccCluster_RegionsConfig
2026-09-23T08:37:10.0398835Z === NAME  TestAccCluster_RegionsConfig
2026-09-23T08:37:10.0399556Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-23T08:37:10.0400029Z         
2026-09-23T08:37:10.0402806Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7179731177786627815): error updating MongoDB Cluster (test-acc-tf-c-7179731177786627815): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6ab38d0caa941871fb3a9346/clusters/test-acc-tf-c-7179731177786627815: 400 (request "INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS") One or more shards are being removed that consume more disk space than that available on the remaining shards.
2026-09-23T08:37:10.0406262Z         
2026-09-23T08:37:10.0406871Z           with mongodbatlas_cluster.test,
2026-09-23T08:37:10.0408103Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-23T08:37:10.0409196Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-23T08:37:10.0409768Z         
2026-09-23T08:38:50.0980667Z    test_working_directory=/tmp/plugintest4145089184 test_step_number=1 test_name=TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T08:42:02.6550121Z --- FAIL: TestAccCluster_RegionsConfig (971.40s)
```

- 2026-09-24 PASS 53 minutes
- 2026-09-25 PASS 54 minutes
- 2026-09-26 PASS 52 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 51 minutes
- 2026-09-29 PASS an hour
- 2026-09-30 PASS 51 minutes
- 2026-10-01 PASS 50 minutes
- 2026-10-02 PASS 51 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 50 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 43 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 44 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 44 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 45 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 52 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
