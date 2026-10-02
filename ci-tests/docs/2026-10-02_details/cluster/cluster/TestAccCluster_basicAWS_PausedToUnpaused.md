# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-07 00:46](#error-2026-09-07t0046320000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6a9e0965ce994148d59ca713/clusters/test-acc-tf-c-6561943116575313020 | dev | 801.05s
[2026-09-09 00:42](#error-2026-09-09t0042560000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa0ab8b567d318b53032788/clusters/test-acc-tf-c-1047105731969967812 | dev | 1029.09s
[2026-09-10 00:40](#error-2026-09-10t0040570000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa1fc964ab31ba345247a11/clusters/test-acc-tf-c-5553662450919056210 | dev | 844.06s
[2026-09-11 06:40](#error-2026-09-11t0640570000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-5210564759707490796 | dev | 826.08s
[2026-09-23 00:40](#error-2026-09-23t0040290000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6ab31ffad27ba93df642137a/clusters/test-acc-tf-c-9002655713310523202 | dev | 855.05s
[2026-09-23 08:25](#error-2026-09-23t0825510000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6ab38d0caa941871fb3a9346/clusters/test-acc-tf-c-7207645721594325775 | dev | 778.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 28 minutes
- 2026-09-03
  - PASS 25 minutes
  - PASS 24 minutes
- 2026-09-04 PASS 38 minutes
- 2026-09-05 PASS 24 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 13 minutes

### Error 2026-09-07T00:46:32+00:00
```
2026-09-07T00:46:32.5829814Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-09-07T00:46:32.5902084Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-07T00:47:27.6089932Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-07T00:47:27.6091940Z     pre_check.go:46: Time before creating cluster: 2026-09-07T00:47:27.608751055Z, ProjectID: 6a9e0965ce994148d59ca713, Cluster name: test-acc-tf-c-6561943116575313020
2026-09-07T00:59:54.0149778Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-07T00:59:54.0150558Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-09-07T00:59:54.0151125Z         
2026-09-07T00:59:54.0153507Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6561943116575313020): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a9e0965ce994148d59ca713/clusters/test-acc-tf-c-6561943116575313020: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-iuth1c-shard-0.
2026-09-07T00:59:54.0155516Z         
2026-09-07T00:59:54.0155995Z           with mongodbatlas_cluster.test,
2026-09-07T00:59:54.0156652Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-07T00:59:54.0157270Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-07T00:59:54.0157596Z         
2026-09-07T00:59:54.0649780Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (801.47s)
```

  - PASS 26 minutes
- 2026-09-08 PASS 23 minutes
- 2026-09-09

### Error 2026-09-09T00:42:56+00:00
```
2026-09-09T00:42:56.5136706Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-09-09T00:42:56.5218287Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-09T00:43:11.5149183Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-09T00:43:11.5151473Z     pre_check.go:46: Time before creating cluster: 2026-09-09T00:43:11.514543491Z, ProjectID: 6aa0ab8b567d318b53032788, Cluster name: test-acc-tf-c-1047105731969967812
2026-09-09T01:00:06.3647971Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-09T01:00:06.3648683Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-09-09T01:00:06.3649274Z         
2026-09-09T01:00:06.3651809Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1047105731969967812): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa0ab8b567d318b53032788/clusters/test-acc-tf-c-1047105731969967812: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-129b5y-shard-0.
2026-09-09T01:00:06.3653320Z         
2026-09-09T01:00:06.3653654Z           with mongodbatlas_cluster.test,
2026-09-09T01:00:06.3654322Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-09T01:00:06.3654925Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-09T01:00:06.3655250Z         
2026-09-09T01:00:06.4162110Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (1029.90s)
```

- 2026-09-10

### Error 2026-09-10T00:40:57+00:00
```
2026-09-10T00:40:57.3094378Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-09-10T00:40:57.3110520Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-10T00:41:37.3192318Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-10T00:41:37.3194301Z     pre_check.go:46: Time before creating cluster: 2026-09-10T00:41:37.31889133Z, ProjectID: 6aa1fc964ab31ba345247a11, Cluster name: test-acc-tf-c-5553662450919056210
2026-09-10T00:55:01.8660477Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-10T00:55:01.8661098Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-09-10T00:55:01.8661748Z         
2026-09-10T00:55:01.8663895Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5553662450919056210): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa1fc964ab31ba345247a11/clusters/test-acc-tf-c-5553662450919056210: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-4eye9n-shard-0.
2026-09-10T00:55:01.8665382Z         
2026-09-10T00:55:01.8665807Z           with mongodbatlas_cluster.test,
2026-09-10T00:55:01.8666511Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-10T00:55:01.8667146Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-10T00:55:01.8667613Z         
2026-09-10T00:55:01.9166413Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (844.61s)
```

- 2026-09-11
  - PASS an hour
  - FAIL 13 minutes

### Error 2026-09-11T06:40:57+00:00
```
2026-09-11T06:40:57.7454120Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-09-11T06:40:57.7463093Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-11T06:41:07.7487128Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-11T06:41:07.7489735Z     pre_check.go:46: Time before creating cluster: 2026-09-11T06:41:07.748259124Z, ProjectID: 6aa3a277f7fcc4bbebf4e4e9, Cluster name: test-acc-tf-c-5210564759707490796
2026-09-11T06:54:44.4559434Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-11T06:54:44.4560036Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-09-11T06:54:44.4560616Z         
2026-09-11T06:54:44.4564460Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5210564759707490796): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-5210564759707490796: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-c30cyc-shard-0.
2026-09-11T06:54:44.4567048Z         
2026-09-11T06:54:44.4567567Z           with mongodbatlas_cluster.test,
2026-09-11T06:54:44.4568420Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-11T06:54:44.4569029Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-11T06:54:44.4569353Z         
2026-09-11T06:54:44.5057836Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (826.76s)
```

- 2026-09-12 PASS 24 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 24 minutes
- 2026-09-15 PASS 25 minutes
- 2026-09-16 PASS 23 minutes
- 2026-09-17 PASS 25 minutes
- 2026-09-18 PASS 27 minutes
- 2026-09-19 PASS 23 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22 PASS 24 minutes
- 2026-09-23
  - FAIL 14 minutes

### Error 2026-09-23T00:40:29+00:00
```
2026-09-23T00:40:29.0700821Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T00:40:29.0755546Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T00:41:19.0930355Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T00:41:19.0931769Z     pre_check.go:46: Time before creating cluster: 2026-09-23T00:41:19.092746398Z, ProjectID: 6ab31ffad27ba93df642137a, Cluster name: test-acc-tf-c-9002655713310523202
2026-09-23T00:54:44.4804607Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T00:54:44.4805404Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-09-23T00:54:44.4805776Z         
2026-09-23T00:54:44.4807387Z         Error: error updating MongoDB Cluster (test-acc-tf-c-9002655713310523202): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6ab31ffad27ba93df642137a/clusters/test-acc-tf-c-9002655713310523202: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-ls30ri-shard-0.
2026-09-23T00:54:44.4808486Z         
2026-09-23T00:54:44.4808776Z           with mongodbatlas_cluster.test,
2026-09-23T00:54:44.4809300Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-23T00:54:44.4809792Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-23T00:54:44.4810072Z         
2026-09-23T00:54:44.5291963Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (855.46s)
```

  - FAIL 12 minutes

### Error 2026-09-23T08:25:51+00:00
```
2026-09-23T08:25:51.2505471Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T08:25:51.2881057Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T08:26:36.2660326Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T08:26:36.2662502Z     pre_check.go:46: Time before creating cluster: 2026-09-23T08:26:36.265698206Z, ProjectID: 6ab38d0caa941871fb3a9346, Cluster name: test-acc-tf-c-7207645721594325775
2026-09-23T08:38:50.0981665Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-09-23T08:38:50.0982742Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-09-23T08:38:50.0983541Z         
2026-09-23T08:38:50.0987938Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7207645721594325775): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6ab38d0caa941871fb3a9346/clusters/test-acc-tf-c-7207645721594325775: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-eychal-shard-0.
2026-09-23T08:38:50.0990599Z         
2026-09-23T08:38:50.0991198Z           with mongodbatlas_cluster.test,
2026-09-23T08:38:50.0992396Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-23T08:38:50.0993516Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-23T08:38:50.0994099Z         
2026-09-23T08:38:50.1518788Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (778.90s)
```

- 2026-09-24 PASS 25 minutes
- 2026-09-25 PASS 27 minutes
- 2026-09-26 PASS 23 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29 PASS 27 minutes
- 2026-09-30 PASS 24 minutes
- 2026-10-01 PASS 23 minutes
- 2026-10-02 PASS 25 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 23 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 23 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 25 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 27 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 23 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
