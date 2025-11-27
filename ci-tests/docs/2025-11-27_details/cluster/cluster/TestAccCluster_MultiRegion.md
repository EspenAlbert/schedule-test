# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4) TIMEOUT
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 17992.00s
[2025-11-19 09:29](#error-2025-11-19t0929410000) |  | dev | timeout | 11533.03s
[2025-11-25 00:27](#error-2025-11-25t0027020000) |  | dev | timeout | 11603.08s
[2025-11-26 00:28](#error-2025-11-26t0028250000) |  | dev | timeout | 11469.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1400292Z === RUN   TestAccCluster_MultiRegion
2025-10-30T00:28:10.4942428Z === CONT  TestAccCluster_MultiRegion
2025-10-30T03:38:08.8407424Z === NAME  TestAccCluster_MultiRegion
2025-10-30T03:38:08.8408086Z     resource_cluster_test.go:480: Step 2/2 error: Error running apply: exit status 1
2025-10-30T03:38:08.8408685Z         
2025-10-30T03:38:08.8410105Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8904530776709325973): error updating MongoDB Cluster (test-acc-tf-c-8904530776709325973): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-30T03:38:08.8411070Z         
2025-10-30T03:38:08.8411407Z           with mongodbatlas_cluster.multi_region,
2025-10-30T03:38:08.8412145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-30T03:38:08.8412836Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-30T03:38:08.8413240Z         
2025-10-30T03:38:08.9812454Z    test_working_directory=/tmp/plugintest2265976080 test_name=TestAccCluster_ProviderRegionName test_terraform_path=/home/runner/work/_temp/6b18102a-be0c-40d5-a671-32aa7fa4c5b9/terraform
2025-10-30T05:28:02.7475714Z panic: test timed out after 5h0m0s
2025-10-30T05:28:02.7476832Z 	running tests:
2025-10-30T05:28:02.7477604Z 		TestAccCluster_MultiRegion (4h59m52s)
```

- 2025-10-31 PASS 37 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 30 minutes
- 2025-11-04 PASS 37 minutes
- 2025-11-05
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-11-06 PASS 35 minutes
- 2025-11-07 PASS 32 minutes
- 2025-11-08 PASS 54 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 28 minutes
- 2025-11-11 PASS 27 minutes
- 2025-11-12 PASS 32 minutes
- 2025-11-13 PASS 56 minutes
- 2025-11-14 PASS 35 minutes
- 2025-11-15 PASS 28 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 34 minutes
- 2025-11-18 PASS 28 minutes
- 2025-11-19
  - PASS 42 minutes
  - FAIL 3 hours

### Error 2025-11-19T09:29:41+00:00
```
2025-11-19T09:29:41.8192104Z === RUN   TestAccCluster_MultiRegion
2025-11-19T09:29:44.1598806Z === CONT  TestAccCluster_MultiRegion
2025-11-19T12:39:44.8501576Z === NAME  TestAccCluster_MultiRegion
2025-11-19T12:39:44.8502381Z     resource_cluster_test.go:480: Step 2/2 error: Error running apply: exit status 1
2025-11-19T12:39:44.8502947Z         
2025-11-19T12:39:44.8504088Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1976353440504392997): error updating MongoDB Cluster (test-acc-tf-c-1976353440504392997): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-19T12:39:44.8505154Z         
2025-11-19T12:39:44.8505638Z           with mongodbatlas_cluster.multi_region,
2025-11-19T12:39:44.8506243Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-19T12:39:44.8506788Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-19T12:39:44.8508531Z         
2025-11-19T12:41:57.4803540Z --- FAIL: TestAccCluster_MultiRegion (11533.32s)
```

- 2025-11-20 PASS 44 minutes
- 2025-11-21 PASS 37 minutes
- 2025-11-22 PASS 38 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 35 minutes
- 2025-11-25

### Error 2025-11-25T00:27:02+00:00
```
2025-11-25T00:27:02.6449785Z === RUN   TestAccCluster_MultiRegion
2025-11-25T00:27:08.3814706Z === CONT  TestAccCluster_MultiRegion
2025-11-25T03:38:16.8922328Z === NAME  TestAccCluster_MultiRegion
2025-11-25T03:38:16.8922895Z     resource_cluster_test.go:480: Step 2/2 error: Error running apply: exit status 1
2025-11-25T03:38:16.8923472Z         
2025-11-25T03:38:16.8924899Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6412308415172188812): error updating MongoDB Cluster (test-acc-tf-c-6412308415172188812): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-25T03:38:16.8925879Z         
2025-11-25T03:38:16.8926326Z           with mongodbatlas_cluster.multi_region,
2025-11-25T03:38:16.8927268Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-25T03:38:16.8927895Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-25T03:38:16.8928240Z         
2025-11-25T03:40:29.1057021Z --- FAIL: TestAccCluster_MultiRegion (11603.85s)
```

- 2025-11-26

### Error 2025-11-26T00:28:25+00:00
```
2025-11-26T00:28:25.2941171Z === RUN   TestAccCluster_MultiRegion
2025-11-26T00:28:27.5626991Z === CONT  TestAccCluster_MultiRegion
2025-11-26T03:37:24.6786708Z === NAME  TestAccCluster_MultiRegion
2025-11-26T03:37:24.6787434Z     resource_cluster_test.go:480: Step 2/2 error: Error running apply: exit status 1
2025-11-26T03:37:24.6787971Z         
2025-11-26T03:37:24.6789556Z         Error: error updating MongoDB Cluster (test-acc-tf-c-248124884962863333): error updating MongoDB Cluster (test-acc-tf-c-248124884962863333): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-26T03:37:24.6790582Z         
2025-11-26T03:37:24.6790907Z           with mongodbatlas_cluster.multi_region,
2025-11-26T03:37:24.6791910Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-26T03:37:24.6792571Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-26T03:37:24.6792881Z         
2025-11-26T03:39:36.6206153Z --- FAIL: TestAccCluster_MultiRegion (11469.06s)
```

- 2025-11-27 PASS 39 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-23 00:31](#error-2025-11-23t0031440000) |  | qa | timeout | 11570.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 28 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 28 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 28 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 31 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23

### Error 2025-11-23T00:31:44+00:00
```
2025-11-23T00:31:44.3929368Z === RUN   TestAccCluster_MultiRegion
2025-11-23T00:31:47.8336208Z === CONT  TestAccCluster_MultiRegion
2025-11-23T03:41:45.2526657Z === NAME  TestAccCluster_MultiRegion
2025-11-23T03:41:45.2527538Z     resource_cluster_test.go:480: Step 2/2 error: Error running apply: exit status 1
2025-11-23T03:41:45.2528189Z         
2025-11-23T03:41:45.2529837Z         Error: error updating MongoDB Cluster (test-acc-tf-c-807872040739514914): error updating MongoDB Cluster (test-acc-tf-c-807872040739514914): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-23T03:41:45.2531114Z         
2025-11-23T03:41:45.2531642Z           with mongodbatlas_cluster.multi_region,
2025-11-23T03:41:45.2532940Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-23T03:41:45.2534003Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-23T03:41:45.2534552Z         
2025-11-23T03:44:37.9643672Z --- FAIL: TestAccCluster_MultiRegion (11570.36s)
```

- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
