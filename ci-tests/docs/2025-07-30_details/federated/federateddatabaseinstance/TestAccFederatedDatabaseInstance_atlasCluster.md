# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:33](#error-2025-07-11t0333080000) |  | dev | timeout | 10980.01s
[2025-07-14 03:31](#error-2025-07-14t0331360000) |  | dev | timeout | 10808.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 12 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-07-11

### Error 2025-07-11T03:33:08+00:00
```
2025-07-11T03:33:08.1899764Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-11T03:33:08.1901181Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-4456613287777460943
2025-07-11T03:33:08.1904160Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-11T03:33:08.1906749Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-11T03:33:08.1908294Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:44.962092144Z, ProjectID: 68705af24f431f68780bd30a, Cluster name: test-acc-tf-c-7116647147307484687
2025-07-11T03:33:08.1949652Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-11T03:33:08.1950884Z     resource_federated_database_instance_test.go:125: Step 1/1 error: Error running apply: exit status 1
2025-07-11T03:33:08.1951667Z         
2025-07-11T03:33:08.1952970Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:33:08.1953907Z         
2025-07-11T03:33:08.1954537Z           with mongodbatlas_advanced_cluster.cluster2,
2025-07-11T03:33:08.1955732Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_advanced_cluster" "cluster2":
2025-07-11T03:33:08.1956876Z           40: resource "mongodbatlas_advanced_cluster" "cluster2" {
2025-07-11T03:33:08.1957430Z         
2025-07-11T03:33:08.1957954Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (10980.08s)
```

- 2025-07-12 PASS 12 minutes
- 2025-07-13 PASS 14 minutes
- 2025-07-14

### Error 2025-07-14T03:31:36+00:00
```
2025-07-14T03:31:36.1141457Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-14T03:31:36.1142234Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-8193381984036979895
2025-07-14T03:31:36.1144519Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-14T03:31:36.1145963Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-14T03:31:36.1146834Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:03.775654315Z, ProjectID: 68744fc152cba864e5f0f99a, Cluster name: test-acc-tf-c-2461689175399064117
2025-07-14T03:31:36.1175099Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-14T03:31:36.1175727Z     resource_federated_database_instance_test.go:125: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:36.1176180Z         
2025-07-14T03:31:36.1176894Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:36.1177431Z         
2025-07-14T03:31:36.1177786Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:36.1178473Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:36.1179121Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:36.1179450Z         
2025-07-14T03:31:36.1180333Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:36.1180858Z         
2025-07-14T03:31:36.1181188Z           with mongodbatlas_advanced_cluster.cluster2,
2025-07-14T03:31:36.1181840Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_advanced_cluster" "cluster2":
2025-07-14T03:31:36.1182445Z           40: resource "mongodbatlas_advanced_cluster" "cluster2" {
2025-07-14T03:31:36.1182759Z         
2025-07-14T03:31:36.1183175Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (10808.75s)
```

- 2025-07-15 PASS 13 minutes
- 2025-07-16 PASS 13 minutes
- 2025-07-17 PASS 19 minutes
- 2025-07-18 PASS 13 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 15 minutes
- 2025-07-21 PASS 11 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 12 minutes
- 2025-07-25 PASS 16 minutes
- 2025-07-26 PASS 15 minutes
- 2025-07-27 PASS 15 minutes
- 2025-07-28 PASS 13 minutes
- 2025-07-29 PASS 13 minutes
- 2025-07-30 PASS 15 minutes