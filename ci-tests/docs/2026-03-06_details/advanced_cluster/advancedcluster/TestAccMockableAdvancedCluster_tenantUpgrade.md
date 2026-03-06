# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-26 00:36](#error-2026-02-26t0036410000) |  | dev | timeout | 10817.05s
[2026-03-03 00:41](#error-2026-03-03t0041200000) |  | dev | timeout | 10945.01s
[2026-03-04 00:38](#error-2026-03-04t0038030000) |  | dev | timeout | 10931.01s
[2026-03-05 00:40](#error-2026-03-05t0040320000) |  | dev | timeout | 10898.09s
[2026-03-06 00:42](#error-2026-03-06t0042580000) |  | dev | timeout | 10946.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 24 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 25 minutes
- 2026-02-10 PASS 25 minutes
- 2026-02-11 PASS 25 minutes
- 2026-02-12 PASS 24 minutes
- 2026-02-13 PASS 25 minutes
- 2026-02-14 PASS 24 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 25 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 28 minutes
- 2026-02-19 PASS 42 minutes
- 2026-02-20 PASS 26 minutes
- 2026-02-21 PASS 27 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24 PASS 26 minutes
- 2026-02-25 PASS 26 minutes
- 2026-02-26

### Error 2026-02-26T00:36:41+00:00
```
2026-02-26T00:36:41.5713950Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-26T00:36:42.6412935Z     resource_test.go:53: Adding variable groupId=699f9596b9916b47c880fd5c
2026-02-26T00:36:42.6414049Z     resource_test.go:53: Adding variable clusterName=test-acc-tf-c-5474722629806441991
2026-02-26T00:39:22.1872143Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-26T00:39:37.1982609Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-26T00:39:37.1984562Z     pre_check.go:46: Time before creating cluster: 2026-02-26T00:39:37.19793058Z, ProjectID: 699f9596b9916b47c880fd5c, Cluster name: test-acc-tf-c-5474722629806441991
2026-02-26T03:39:38.5602327Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-26T03:39:38.5603185Z     resource_test.go:53: Step 1/3 error: Error running apply: exit status 1
2026-02-26T03:39:38.5603714Z         
2026-02-26T03:39:38.5603971Z         Error: Error in create
2026-02-26T03:39:38.5604264Z         
2026-02-26T03:39:38.5604870Z           with mongodbatlas_advanced_cluster.test,
2026-02-26T03:39:38.5605764Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-26T03:39:38.5606733Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-26T03:39:38.5607087Z         
2026-02-26T03:39:38.5607555Z         cluster=test-acc-tf-c-5474722629806441991 didn't reach desired state: IDLE,
2026-02-26T03:39:38.5608488Z         error: context deadline exceeded
2026-02-26T03:39:38.6124433Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10817.50s)
```

- 2026-02-27 PASS 30 minutes
- 2026-02-28 PASS 25 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 23 minutes
  - PASS 23 minutes
- 2026-03-03

### Error 2026-03-03T00:41:20+00:00
```
2026-03-03T00:41:20.3236642Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-03T00:41:21.3263309Z     resource_test.go:53: Adding variable groupId=69a62e01caf9a091745b1256
2026-03-03T00:41:21.3264483Z     resource_test.go:53: Adding variable clusterName=test-acc-tf-c-3619470811960109035
2026-03-03T00:45:19.0536501Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-03T00:45:59.0967037Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-03T00:45:59.0969345Z     pre_check.go:46: Time before creating cluster: 2026-03-03T00:45:59.096402051Z, ProjectID: 69a62e01caf9a091745b1256, Cluster name: test-acc-tf-c-3619470811960109035
2026-03-03T00:46:31.5661838Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-03T00:46:31.5664378Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-1469633699685824172
2026-03-03T00:46:31.9127588Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-596532579647066545
2026-03-03T00:46:32.4570673Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7106828246465073110
2026-03-03T00:46:32.8070244Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-1714273980674069067
2026-03-03T00:46:33.1725437Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-5644027939054416631
2026-03-03T03:46:41.0304087Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-03T03:46:41.0305011Z     resource_test.go:53: Step 2/3 error: Error running apply: exit status 1
2026-03-03T03:46:41.0305476Z         
2026-03-03T03:46:41.0305766Z         Error: Error in tenant upgrade
2026-03-03T03:46:41.0306409Z         
2026-03-03T03:46:41.0306765Z           with mongodbatlas_advanced_cluster.test,
2026-03-03T03:46:41.0307686Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-03T03:46:41.0308485Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-03-03T03:46:41.0308829Z         
2026-03-03T03:46:41.0309289Z         cluster=test-acc-tf-c-3619470811960109035 didn't reach desired state: IDLE,
2026-03-03T03:46:41.0309933Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-03-03T03:46:41.0310397Z         'UPDATING', timeout: 3h0m0s)
2026-03-03T03:47:43.1117161Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10945.06s)
```

- 2026-03-04

### Error 2026-03-04T00:38:03+00:00
```
2026-03-04T00:38:03.4270279Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-04T00:38:04.8841789Z     resource_test.go:53: Adding variable groupId=69a77ee8c7d3cdfdfb63c5e0
2026-03-04T00:38:04.8843356Z     resource_test.go:53: Adding variable clusterName=test-acc-tf-c-1737196633350340786
2026-03-04T00:39:33.1312156Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-04T00:40:03.1304339Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-04T00:40:03.1306616Z     pre_check.go:46: Time before creating cluster: 2026-03-04T00:40:03.130131207Z, ProjectID: 69a77ee8c7d3cdfdfb63c5e0, Cluster name: test-acc-tf-c-1737196633350340786
2026-03-04T00:40:35.6092322Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-04T00:40:35.6094328Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2035668968191665851
2026-03-04T00:40:35.9418561Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-490810938516381401
2026-03-04T03:40:41.0679685Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-04T03:40:41.0680461Z     resource_test.go:53: Step 2/3 error: Error running apply: exit status 1
2026-03-04T03:40:41.0680873Z         
2026-03-04T03:40:41.0681159Z         Error: Error in tenant upgrade
2026-03-04T03:40:41.0681464Z         
2026-03-04T03:40:41.0681804Z           with mongodbatlas_advanced_cluster.test,
2026-03-04T03:40:41.0682471Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-04T03:40:41.0683323Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-03-04T03:40:41.0683662Z         
2026-03-04T03:40:41.0684132Z         cluster=test-acc-tf-c-1737196633350340786 didn't reach desired state: IDLE,
2026-03-04T03:40:41.0684774Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-03-04T03:40:41.0685236Z         'UPDATING', timeout: 3h0m0s)
2026-03-04T03:41:42.7747327Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10931.11s)
```

- 2026-03-05

### Error 2026-03-05T00:40:32+00:00
```
2026-03-05T00:40:32.3946857Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-05T00:40:33.3070968Z     resource_test.go:53: Adding variable groupId=69a8d0d0a291ba9cfa6837e0
2026-03-05T00:40:33.3071831Z     resource_test.go:53: Adding variable clusterName=test-acc-tf-c-2655626758478932945
2026-03-05T00:43:05.2213236Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-05T00:43:30.2136080Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-05T00:43:30.2140084Z     pre_check.go:46: Time before creating cluster: 2026-03-05T00:43:30.213116939Z, ProjectID: 69a8d0d0a291ba9cfa6837e0, Cluster name: test-acc-tf-c-2655626758478932945
2026-03-05T00:44:02.7017509Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-05T00:44:02.7019699Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-4765860821549780024
2026-03-05T00:44:03.0488844Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8045555555313905878
2026-03-05T00:44:03.3940487Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1199554287121499041
2026-03-05T00:44:03.7496190Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-66453690547029760
2026-03-05T00:44:04.0947809Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-9045502336565098635
2026-03-05T03:44:12.0211974Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-05T03:44:12.0212547Z     resource_test.go:53: Step 2/3 error: Error running apply: exit status 1
2026-03-05T03:44:12.0212940Z         
2026-03-05T03:44:12.0213234Z         Error: Error in tenant upgrade
2026-03-05T03:44:12.0213511Z         
2026-03-05T03:44:12.0213850Z           with mongodbatlas_advanced_cluster.test,
2026-03-05T03:44:12.0214545Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-05T03:44:12.0215198Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-03-05T03:44:12.0215536Z         
2026-03-05T03:44:12.0216003Z         cluster=test-acc-tf-c-2655626758478932945 didn't reach desired state: IDLE,
2026-03-05T03:44:12.0216647Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-03-05T03:44:12.0217086Z         'UPDATING', timeout: 3h0m0s)
2026-03-05T03:44:43.1872632Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10898.88s)
```

- 2026-03-06

### Error 2026-03-06T00:42:58+00:00
```
2026-03-06T00:42:58.2785635Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-06T00:42:59.5532798Z     resource_test.go:53: Adding variable groupId=69aa230f47b5785948311d66
2026-03-06T00:42:59.5534141Z     resource_test.go:53: Adding variable clusterName=test-acc-tf-c-2836006575867445501
2026-03-06T00:44:34.1596954Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-06T00:45:14.1261032Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-06T00:45:14.1263737Z     pre_check.go:46: Time before creating cluster: 2026-03-06T00:45:14.125709092Z, ProjectID: 69aa230f47b5785948311d66, Cluster name: test-acc-tf-c-2836006575867445501
2026-03-06T00:45:47.6544155Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-06T00:45:47.6545909Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7772700952875699969
2026-03-06T00:45:48.1450502Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3386128588275893670
2026-03-06T00:45:48.6220750Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7506448126148305529
2026-03-06T03:45:57.2878152Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-03-06T03:45:57.2879036Z     resource_test.go:53: Step 2/3 error: Error running apply: exit status 1
2026-03-06T03:45:57.2879661Z         
2026-03-06T03:45:57.2880114Z         Error: Error in tenant upgrade
2026-03-06T03:45:57.2880576Z         
2026-03-06T03:45:57.2881354Z           with mongodbatlas_advanced_cluster.test,
2026-03-06T03:45:57.2882485Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-06T03:45:57.2883444Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-03-06T03:45:57.2883774Z         
2026-03-06T03:45:57.2884229Z         cluster=test-acc-tf-c-2836006575867445501 didn't reach desired state: IDLE,
2026-03-06T03:45:57.2884876Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-03-06T03:45:57.2885315Z         'UPDATING', timeout: 3h0m0s)
2026-03-06T03:46:59.2050225Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10946.35s)
```


## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
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
- 2026-02-15 PASS 31 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 24 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 26 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 33 minutes
- 2026-03-02 PASS 18 minutes
- 2026-03-03 PASS 24 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
