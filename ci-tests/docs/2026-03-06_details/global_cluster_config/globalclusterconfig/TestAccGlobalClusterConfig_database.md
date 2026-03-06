# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 00:38](#error-2026-02-12t0038030000) |  | dev | timeout | 10806.01s
[2026-02-18 00:38](#error-2026-02-18t0038560000) |  | dev | flaky_client | 525.10s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 49 minutes
- 2026-02-06 PASS 51 minutes
- 2026-02-07 PASS 49 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 50 minutes
- 2026-02-10 PASS 48 minutes
- 2026-02-11 PASS 49 minutes
- 2026-02-12

### Error 2026-02-12T00:38:03+00:00
```
2026-02-12T00:38:03.9658723Z === RUN   TestAccGlobalClusterConfig_database
2026-02-12T00:38:08.9677872Z     pre_check.go:46: Time before creating cluster: 2026-02-12T00:38:08.967131525Z, ProjectID: 698d20e9a6a4cac49f8caace, Cluster name: test-acc-tf-c-2033209116292197640
2026-02-12T03:38:10.0593049Z   
2026-02-12T03:38:10.0593915Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2026-02-12T03:38:10.0594687Z         
2026-02-12T03:38:10.0595088Z         Error: Error in create
2026-02-12T03:38:10.0595520Z         
2026-02-12T03:38:10.0595897Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-12T03:38:10.0596641Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-12T03:38:10.0597327Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-12T03:38:10.0597666Z         
2026-02-12T03:38:10.0598123Z         cluster=test-acc-tf-c-2033209116292197640 didn't reach desired state: IDLE,
2026-02-12T03:38:10.0598596Z         error: context deadline exceeded
2026-02-12T03:38:10.1075510Z --- FAIL: TestAccGlobalClusterConfig_database (10806.14s)
```

- 2026-02-13 PASS 54 minutes
- 2026-02-14 PASS 50 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 52 minutes
- 2026-02-17 PASS 52 minutes
- 2026-02-18

### Error 2026-02-18T00:38:56+00:00
```
2026-02-18T00:38:56.9245405Z === RUN   TestAccGlobalClusterConfig_database
2026-02-18T00:39:01.9296144Z     pre_check.go:46: Time before creating cluster: 2026-02-18T00:39:01.928951606Z, ProjectID: 69950a1e245f62926c4888bd, Cluster name: test-acc-tf-c-4994431356559318142
2026-02-18T00:47:42.8610042Z   
2026-02-18T00:47:42.8610937Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2026-02-18T00:47:42.8611650Z         
2026-02-18T00:47:42.8611913Z         Error: Error in create
2026-02-18T00:47:42.8612158Z         
2026-02-18T00:47:42.8612868Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-18T00:47:42.8613941Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-18T00:47:42.8614787Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-18T00:47:42.8615140Z         
2026-02-18T00:47:42.8615617Z         cluster=test-acc-tf-c-4994431356559318142 didn't reach desired state: IDLE,
2026-02-18T00:47:42.8616045Z         error: Get
2026-02-18T00:47:42.8616779Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/69950a1e245f62926c4888bd/clusters/test-acc-tf-c-4994431356559318142":
2026-02-18T00:47:42.8617727Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-02-18T00:47:42.9139032Z --- FAIL: TestAccGlobalClusterConfig_database (525.99s)
```

- 2026-02-19 PASS 54 minutes
- 2026-02-20 PASS 51 minutes
- 2026-02-21 PASS 48 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 51 minutes
- 2026-02-24 PASS 52 minutes
- 2026-02-25 PASS 53 minutes
- 2026-02-26 PASS 50 minutes
- 2026-02-27 PASS 54 minutes
- 2026-02-28 PASS 55 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 53 minutes
- 2026-03-03 PASS 52 minutes
- 2026-03-04 PASS 49 minutes
- 2026-03-05 PASS 56 minutes
- 2026-03-06 PASS 54 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 26 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 32 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 27 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 27 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 33 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 28 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
