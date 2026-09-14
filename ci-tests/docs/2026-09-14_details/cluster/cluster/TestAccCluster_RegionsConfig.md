# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 00:40](#error-2026-09-10t0040570000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v1.0/groups/6aa1fc964ab31ba345247a11/clusters/test-acc-tf-c-6056652019392017125 | dev | 932.07s
[2026-09-11 06:40](#error-2026-09-11t0640570000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-6123820308537202014 | dev | 933.05s

### Timeline
- 2026-09-07 PASS 52 minutes
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 43 minutes
- 2026-09-14: MISSING
