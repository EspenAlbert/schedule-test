# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 3)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 00:42](#error-2026-09-09t0042560000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa0ab8b567d318b53032788/clusters/test-acc-tf-c-1047105731969967812 | dev | 1029.09s
[2026-09-10 00:40](#error-2026-09-10t0040570000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa1fc964ab31ba345247a11/clusters/test-acc-tf-c-5553662450919056210 | dev | 844.06s
[2026-09-11 06:40](#error-2026-09-11t0640570000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-5210564759707490796 | dev | 826.08s

### Timeline
- 2026-09-07 PASS 26 minutes
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING
