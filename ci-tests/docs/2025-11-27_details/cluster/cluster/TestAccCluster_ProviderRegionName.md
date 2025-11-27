# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4) TIMEOUT
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028080000) |  | dev | timeout | 17992.00s
[2025-11-19 09:29](#error-2025-11-19t0929410000) |  | dev | timeout | 11473.09s
[2025-11-25 00:27](#error-2025-11-25t0027050000) |  | dev | timeout | 11752.00s
[2025-11-26 00:28](#error-2025-11-26t0028250000) |  | dev | timeout | 11539.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:08+00:00
```
2025-10-30T00:28:08.1345313Z === RUN   TestAccCluster_ProviderRegionName
2025-10-30T00:28:10.4938472Z === CONT  TestAccCluster_ProviderRegionName
2025-10-30T03:38:08.9813975Z === NAME  TestAccCluster_ProviderRegionName
2025-10-30T03:38:08.9814685Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-10-30T03:38:08.9815135Z         
2025-10-30T03:38:08.9816848Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7559459534810944119): error updating MongoDB Cluster (test-acc-tf-c-7559459534810944119): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-30T03:38:08.9818071Z         
2025-10-30T03:38:08.9818520Z           with mongodbatlas_cluster.multi_region,
2025-10-30T03:38:08.9819231Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-10-30T03:38:08.9819874Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-10-30T03:38:08.9820302Z         
2025-10-30T05:28:02.7476832Z 	running tests:
2025-10-30T05:28:02.7477604Z 		TestAccCluster_MultiRegion (4h59m52s)
2025-10-30T05:28:02.7478414Z 		TestAccCluster_ProviderRegionName (4h59m52s)
```

- 2025-10-31 PASS 35 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 26 minutes
- 2025-11-04 PASS 34 minutes
- 2025-11-05
  - PASS 42 minutes
  - PASS 27 minutes
- 2025-11-06 PASS 34 minutes
- 2025-11-07 PASS 32 minutes
- 2025-11-08 PASS 53 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 26 minutes
- 2025-11-11 PASS 26 minutes
- 2025-11-12 PASS 30 minutes
- 2025-11-13 PASS 56 minutes
- 2025-11-14 PASS 37 minutes
- 2025-11-15 PASS 27 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 31 minutes
- 2025-11-18 PASS 27 minutes
- 2025-11-19
  - PASS 41 minutes
  - FAIL 3 hours

### Error 2025-11-19T09:29:41+00:00
```
2025-11-19T09:29:41.8193167Z === RUN   TestAccCluster_ProviderRegionName
2025-11-19T09:29:44.1597743Z === CONT  TestAccCluster_ProviderRegionName
2025-11-19T12:38:34.6179724Z === NAME  TestAccCluster_ProviderRegionName
2025-11-19T12:38:34.6180289Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-11-19T12:38:34.6180714Z         
2025-11-19T12:38:34.6182035Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4475348900496456268): error updating MongoDB Cluster (test-acc-tf-c-4475348900496456268): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-19T12:38:34.6182836Z         
2025-11-19T12:38:34.6183136Z           with mongodbatlas_cluster.multi_region,
2025-11-19T12:38:34.6183706Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-19T12:38:34.6184251Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-19T12:38:34.6184532Z         
2025-11-19T12:40:58.0452467Z --- FAIL: TestAccCluster_ProviderRegionName (11473.89s)
```

- 2025-11-20 PASS 43 minutes
- 2025-11-21 PASS 36 minutes
- 2025-11-22 PASS 36 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 35 minutes
- 2025-11-25

### Error 2025-11-25T00:27:05+00:00
```
2025-11-25T00:27:05.7718316Z === RUN   TestAccCluster_ProviderRegionName
2025-11-25T00:27:08.3814163Z === CONT  TestAccCluster_ProviderRegionName
2025-11-25T03:40:37.6212469Z === NAME  TestAccCluster_ProviderRegionName
2025-11-25T03:40:37.6213210Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-11-25T03:40:37.6213738Z         
2025-11-25T03:40:37.6215151Z         Error: error updating MongoDB Cluster (test-acc-tf-c-2896266545605673540): error updating MongoDB Cluster (test-acc-tf-c-2896266545605673540): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-25T03:40:37.6216144Z         
2025-11-25T03:40:37.6216589Z           with mongodbatlas_cluster.multi_region,
2025-11-25T03:40:37.6217552Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-25T03:40:37.6218167Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-25T03:40:37.6218534Z         
2025-11-25T03:43:00.4221758Z --- FAIL: TestAccCluster_ProviderRegionName (11752.04s)
```

- 2025-11-26

### Error 2025-11-26T00:28:25+00:00
```
2025-11-26T00:28:25.2942437Z === RUN   TestAccCluster_ProviderRegionName
2025-11-26T00:28:27.5561905Z === CONT  TestAccCluster_ProviderRegionName
2025-11-26T03:38:34.8785848Z === NAME  TestAccCluster_ProviderRegionName
2025-11-26T03:38:34.8786596Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-11-26T03:38:34.8787193Z         
2025-11-26T03:38:34.8788427Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4855137204546669768): error updating MongoDB Cluster (test-acc-tf-c-4855137204546669768): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-26T03:38:34.8789616Z         
2025-11-26T03:38:34.8789942Z           with mongodbatlas_cluster.multi_region,
2025-11-26T03:38:34.8790685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-26T03:38:34.8791565Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-26T03:38:34.8791988Z         
2025-11-26T03:40:46.7476624Z --- FAIL: TestAccCluster_ProviderRegionName (11539.19s)
```

- 2025-11-27 PASS 37 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-23 00:31](#error-2025-11-23t0031440000) |  | qa | timeout | 11499.03s

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
- 2025-11-09 PASS 26 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 28 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 30 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23

### Error 2025-11-23T00:31:44+00:00
```
2025-11-23T00:31:44.3930417Z === RUN   TestAccCluster_ProviderRegionName
2025-11-23T00:31:47.8334529Z === CONT  TestAccCluster_ProviderRegionName
2025-11-23T03:41:45.2447135Z === NAME  TestAccCluster_ProviderRegionName
2025-11-23T03:41:45.2447939Z     resource_cluster_test.go:544: Step 3/3 error: Error running apply: exit status 1
2025-11-23T03:41:45.2448531Z         
2025-11-23T03:41:45.2450266Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1309619390729654622): error updating MongoDB Cluster (test-acc-tf-c-1309619390729654622): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-11-23T03:41:45.2451659Z         
2025-11-23T03:41:45.2452249Z           with mongodbatlas_cluster.multi_region,
2025-11-23T03:41:45.2453390Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-11-23T03:41:45.2454464Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-11-23T03:41:45.2454943Z         
2025-11-23T03:41:45.2525386Z    test_terraform_path=/home/runner/work/_temp/5bdc3cff-3b3c-43c4-b076-17704141e338/terraform test_working_directory=/tmp/plugintest1694576042 test_step_number=2
2025-11-23T03:43:26.8835433Z --- FAIL: TestAccCluster_ProviderRegionName (11499.28s)
```

- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
