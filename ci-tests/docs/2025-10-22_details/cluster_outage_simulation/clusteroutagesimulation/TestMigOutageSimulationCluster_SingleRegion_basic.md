# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027040000) |  | dev | timeout | 5247.01s
[2025-10-12 00:28](#error-2025-10-12t0028400000) |  | qa | timeout | 4351.02s
[2025-10-14 00:27](#error-2025-10-14t0027220000) |  | dev | timeout | 2602.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 42 minutes
- 2025-09-24 PASS 43 minutes
- 2025-09-25 PASS 44 minutes
- 2025-09-26 PASS 45 minutes
- 2025-09-27 PASS 41 minutes
- 2025-09-28 PASS 41 minutes
- 2025-09-29 PASS 43 minutes
- 2025-09-30
  - PASS 40 minutes
  - PASS 40 minutes
  - PASS 41 minutes
- 2025-10-01
  - PASS 41 minutes
  - PASS 41 minutes
  - PASS 42 minutes
  - PASS 41 minutes
  - PASS 45 minutes
  - PASS 40 minutes
  - PASS 47 minutes
  - PASS 42 minutes
- 2025-10-02 PASS 43 minutes
- 2025-10-03 PASS 42 minutes
- 2025-10-04 PASS 47 minutes
- 2025-10-05 PASS 40 minutes
- 2025-10-06 PASS 41 minutes
- 2025-10-07 PASS 54 minutes
- 2025-10-08 PASS 44 minutes
- 2025-10-09

### Error 2025-10-09T00:27:04+00:00
```
2025-10-09T00:27:04.9717502Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-09T00:27:04.9718691Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-1460378166713015499
2025-10-09T00:27:07.7362489Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-09T00:27:12.7403776Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-09T00:27:12.7405267Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:27:12.740093572Z, ProjectID: 68e70159c2a3cd169303e70d, Cluster name: test-acc-tf-c-4279870964275665150
2025-10-09T01:54:31.1232279Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-09T01:54:31.1233110Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-09T01:54:31.1233516Z         
2025-10-09T01:54:31.1234787Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68e70159c2a3cd169303e70d), Cluster (test-acc-tf-c-4279870964275665150): timeout while waiting for state to become 'SIMULATING' (last state: 'STARTING', timeout: 25m0s)
2025-10-09T01:54:31.1236650Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T01:54:31.1238361Z         cleanup failed: error ending MongoDB Atlas Cluster Outage Simulation for Project (68e70159c2a3cd169303e70d), Cluster (test-acc-tf-c-4279870964275665150): timeout while waiting for state to become 'DELETED' (last state: 'RECOVERY_REQUESTED', timeout: 25m0s)
2025-10-09T01:54:31.1239266Z         
2025-10-09T01:54:31.1239660Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-09T01:54:31.1240421Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-09T01:54:31.1241142Z           40: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-09T01:54:31.1241487Z         
2025-10-09T01:54:32.0352971Z    test_name=TestMigOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/97f3f172-1b04-4549-aae3-734378bb6ad7/terraform test_working_directory=/tmp/plugintest1395425829
2025-10-09T01:54:32.0355084Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T01:54:32.0355820Z         
2025-10-09T01:54:32.0356396Z         Error: Error in delete
2025-10-09T01:54:32.0356811Z         
2025-10-09T01:54:32.0357539Z         cluster name: test-acc-tf-c-4279870964275665150, API error details:
2025-10-09T01:54:32.0359072Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70159c2a3cd169303e70d/clusters/test-acc-tf-c-4279870964275665150
2025-10-09T01:54:32.0360209Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-09T01:54:32.0361121Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-09T01:54:32.0362173Z         Detail: Cannot terminate cluster test-acc-tf-c-4279870964275665150 in project
2025-10-09T01:54:32.0363256Z         test-acc-tf-p-1460378166713015499 because it is undergoing a regional outage
2025-10-09T01:54:32.0364345Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-09T01:54:32.0365229Z         Request. Params: [test-acc-tf-c-4279870964275665150
2025-10-09T01:54:32.0366036Z         test-acc-tf-p-1460378166713015499], BadRequestDetail: 
2025-10-09T01:54:32.0484560Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (5247.08s)
```

- 2025-10-10 PASS 43 minutes
- 2025-10-11 PASS 44 minutes
- 2025-10-12

### Error 2025-10-12T00:28:40+00:00
```
2025-10-12T00:28:40.7409899Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-12T00:28:40.7413041Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4024986377574999456
2025-10-12T00:28:42.5494912Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-12T00:28:47.5536923Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-12T00:28:47.5538447Z     pre_check.go:36: Time before creating cluster: 2025-10-12T00:28:47.553357102Z, ProjectID: 68eaf639454e3b49aeac0648, Cluster name: test-acc-tf-c-2086100238347838010
2025-10-12T01:41:11.0566956Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-12T01:41:11.0567552Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-12T01:41:11.0567955Z         
2025-10-12T01:41:11.0569270Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (68eaf639454e3b49aeac0648), Cluster (test-acc-tf-c-2086100238347838010): timeout while waiting for state to become 'SIMULATING' (last state: 'START_REQUESTED', timeout: 25m0s)
2025-10-12T01:41:11.0570765Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-12T01:41:11.0571333Z         
2025-10-12T01:41:11.0571731Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-12T01:41:11.0572498Z           on terraform_plugin_test.tf line 40, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-12T01:41:11.0573499Z           40: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-12T01:41:11.0573876Z         
2025-10-12T01:41:11.9050264Z    test_name=TestMigOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/4a3f902e-2f65-437b-ab66-c0c026e05d66/terraform test_working_directory=/tmp/plugintest1253838187 test_step_number=1
2025-10-12T01:41:11.9051511Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T01:41:11.9052042Z         
2025-10-12T01:41:11.9052287Z         Error: Error in delete
2025-10-12T01:41:11.9052615Z         
2025-10-12T01:41:11.9053026Z         cluster name: test-acc-tf-c-2086100238347838010, API error details:
2025-10-12T01:41:11.9053995Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf639454e3b49aeac0648/clusters/test-acc-tf-c-2086100238347838010
2025-10-12T01:41:11.9054971Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-12T01:41:11.9055601Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-12T01:41:11.9056336Z         Detail: Cannot terminate cluster test-acc-tf-c-2086100238347838010 in project
2025-10-12T01:41:11.9057077Z         test-acc-tf-p-4024986377574999456 because it is undergoing a regional outage
2025-10-12T01:41:11.9057758Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-12T01:41:11.9058301Z         Request. Params: [test-acc-tf-c-2086100238347838010
2025-10-12T01:41:11.9058863Z         test-acc-tf-p-4024986377574999456], BadRequestDetail: 
2025-10-12T01:41:11.9187728Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (4351.18s)
```

- 2025-10-13 PASS 45 minutes
- 2025-10-14

### Error 2025-10-14T00:27:22+00:00
```
2025-10-14T00:27:22.3314578Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-14T00:27:22.3315730Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-180695979014936
2025-10-14T00:27:25.8952645Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-14T00:27:30.8952312Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-14T00:27:30.8954642Z     pre_check.go:36: Time before creating cluster: 2025-10-14T00:27:30.894927894Z, ProjectID: 68ed98ead241a8054d20de97, Cluster name: test-acc-tf-c-2870813842673832302
2025-10-14T01:10:45.0706710Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-10-14T01:10:45.0707882Z     resource_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-14T01:10:45.0708672Z         
2025-10-14T01:10:45.0710831Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (68ed98ead241a8054d20de97), Cluster (test-acc-tf-c-2870813842673832302): timeout while waiting for state to become 'DELETED' (last state: 'RECOVERING', timeout: 25m0s)
2025-10-14T01:10:45.0712283Z         
2025-10-14T01:10:45.0852743Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (2602.75s)
```

- 2025-10-15 PASS 42 minutes
- 2025-10-16 PASS 56 minutes
- 2025-10-17 PASS 44 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 42 minutes
- 2025-10-20 PASS 47 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 45 minutes
  - PASS 42 minutes