# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8)
Success rate: 100.00%

## Timeline
### 2025-07-01
#### PASS 12 minutes
```
2025-07-01T08:46:24.2985474Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-01T08:46:24.2986331Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-1229238499873475772
2025-07-01T08:46:24.2988173Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-01T08:46:24.2990653Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-01T08:46:24.2991680Z     pre_check.go:40: Time before creating cluster: 2025-07-01T08:33:37.652786991Z, ProjectID: 68639d5ac98d0934b8c436cc, Cluster name: test-acc-tf-c-2020630659727898100
2025-07-01T08:46:24.3009094Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (773.07s)
```
### 2025-07-02
#### PASS 13 minutes
```
2025-07-02T00:41:47.8800889Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-02T00:41:47.8802625Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-7292048516165148140
2025-07-02T00:41:47.8807452Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-02T00:41:47.8808774Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-02T00:41:47.8810357Z     pre_check.go:40: Time before creating cluster: 2025-07-02T00:28:50.843251325Z, ProjectID: 68647d3cef5b3c2f1ae5e2cd, Cluster name: test-acc-tf-c-6055859769082156332
2025-07-02T00:41:47.8835493Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (783.46s)
```
### 2025-07-03
#### PASS 13 minutes
```
2025-07-03T00:43:17.6277773Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-03T00:43:17.6278885Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-3137386845813702120
2025-07-03T00:43:17.6281581Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-03T00:43:17.6282310Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-03T00:43:17.6283181Z     pre_check.go:40: Time before creating cluster: 2025-07-03T00:29:33.838323316Z, ProjectID: 6865cee4c960c33273ba1ee8, Cluster name: test-acc-tf-c-2571933359465451974
2025-07-03T00:43:17.6297273Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (832.67s)
```
### 2025-07-04
#### PASS 13 minutes
```
2025-07-04T00:42:31.4234205Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-04T00:42:31.4235499Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-353341811230627512
2025-07-04T00:42:31.4240342Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-04T00:42:31.4243118Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-04T00:42:31.4244688Z     pre_check.go:40: Time before creating cluster: 2025-07-04T00:28:57.693592824Z, ProjectID: 68672043579d4c1b1e7ac2b7, Cluster name: test-acc-tf-c-3888903828047441246
2025-07-04T00:42:31.4269723Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (819.99s)
```
### 2025-07-05
#### PASS 12 minutes
```
2025-07-05T00:40:35.5952749Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-05T00:40:35.5954027Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-737331691220917309
2025-07-05T00:40:35.5956394Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-05T00:40:35.5958080Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-05T00:40:35.5959246Z     pre_check.go:40: Time before creating cluster: 2025-07-05T00:28:06.731780171Z, ProjectID: 6868718f21e3e31abeeb89c7, Cluster name: test-acc-tf-c-796159838671094023
2025-07-05T00:40:35.5974785Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (755.57s)
```
### 2025-07-06
#### PASS 14 minutes
```
2025-07-06T00:46:42.9600050Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-06T00:46:42.9601446Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-5424292302879225656
2025-07-06T00:46:42.9604486Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-06T00:46:42.9607443Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-06T00:46:42.9609135Z     pre_check.go:40: Time before creating cluster: 2025-07-06T00:32:04.770562506Z, ProjectID: 6869c3fe690ae45e168bcb3e, Cluster name: test-acc-tf-c-6462773192735138830
2025-07-06T00:46:42.9612960Z 2025/07/06 00:32:17 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd8a5/cloudProviderAccess/6869c4117267b5775b6835dd PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4164668665699932831). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4164668665699932831], BadRequestDetail:  
2025-07-06T00:46:42.9615933Z 2025/07/06 00:32:17 retrying
2025-07-06T00:46:42.9619191Z 2025/07/06 00:32:17 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40e7267b5775b683504/cloudProviderAccess/6869c411690ae45e168bd97c PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-26368175097423521). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-26368175097423521], BadRequestDetail:  
2025-07-06T00:46:42.9622106Z 2025/07/06 00:32:17 retrying
2025-07-06T00:46:42.9625194Z 2025/07/06 00:32:19 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd7bb/cloudProviderAccess/6869c4137267b5775b68371d PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1588364798763055696). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1588364798763055696], BadRequestDetail:  
2025-07-06T00:46:42.9628303Z 2025/07/06 00:32:19 retrying
2025-07-06T00:46:42.9650122Z   
2025-07-06T00:46:42.9803744Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (883.96s)
```
### 2025-07-07
#### PASS 14 minutes
```
2025-07-07T00:45:41.9632639Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-07T00:45:41.9633840Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-5061333349350486068
2025-07-07T00:45:41.9636665Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-07T00:45:41.9637877Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-07T00:45:41.9638826Z     pre_check.go:40: Time before creating cluster: 2025-07-07T00:31:34.478541998Z, ProjectID: 686b15600aabd25fc85da845, Cluster name: test-acc-tf-c-4820078974539144287
2025-07-07T00:45:41.9653032Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (853.46s)
```
### 2025-07-08
#### PASS 14 minutes
```
2025-07-08T00:43:40.0039878Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-07-08T00:43:40.0041200Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-31383828411349430
2025-07-08T00:43:40.0045782Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-08T00:43:40.0046996Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-07-08T00:43:40.0048492Z     pre_check.go:40: Time before creating cluster: 2025-07-08T00:29:20.776317514Z, ProjectID: 686c6658a5ec7701ec2c6f3b, Cluster name: test-acc-tf-c-5262322958703483595
2025-07-08T00:43:40.0072094Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (866.84s)
```