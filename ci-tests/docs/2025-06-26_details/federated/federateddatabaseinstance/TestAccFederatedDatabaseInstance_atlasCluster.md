# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 7)
Success rate: 100.00%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 12 minutes
```
2025-06-20T00:41:29.7107974Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-06-20T00:41:29.7109150Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-3974090831111794368
2025-06-20T00:41:29.7111994Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-20T00:41:29.7113486Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-20T00:41:29.7114378Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:28:46.364000053Z, ProjectID: 6854ab37e16f343ef1dd2006, Cluster name: test-acc-tf-c-4965737959314165961
2025-06-20T00:41:29.7128619Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (770.16s)
```
### 2025-06-21
#### PASS 14 minutes
```
2025-06-21T00:42:51.6798837Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-06-21T00:42:51.6800155Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-5903915268438953005
2025-06-21T00:42:51.6802544Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-21T00:42:51.6804287Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-21T00:42:51.6805409Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:28:37.047140755Z, ProjectID: 6855fcaefadf221ee30c6aca, Cluster name: test-acc-tf-c-2089052541499714770
2025-06-21T00:42:51.6822165Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (860.97s)
```
### 2025-06-22
#### PASS 15 minutes
```
2025-06-22T00:46:59.2958318Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-06-22T00:46:59.2959651Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-4458094220818882625
2025-06-22T00:46:59.2962382Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-22T00:46:59.2963754Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-22T00:46:59.2964850Z     pre_check.go:40: Time before creating cluster: 2025-06-22T00:31:42.049308229Z, ProjectID: 68574ee7ab82446d9bfb044c, Cluster name: test-acc-tf-c-4396894861817520927
2025-06-22T00:46:59.2967226Z 2025/06/22 00:31:54 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef7af7a0954e84ae27e/cloudProviderAccess/68574ef9ab82446d9bfb0d31 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5563848350399394676). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5563848350399394676], BadRequestDetail:  
2025-06-22T00:46:59.2969006Z 2025/06/22 00:31:54 retrying
2025-06-22T00:46:59.2970793Z 2025/06/22 00:31:55 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef8af7a0954e84ae2e8/cloudProviderAccess/68574efaaf7a0954e84ae50f PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8093753782509059133). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8093753782509059133], BadRequestDetail:  
2025-06-22T00:46:59.2972768Z 2025/06/22 00:31:55 retrying
2025-06-22T00:46:59.2985181Z    test_terraform_path=/home/runner/work/_temp/859b6955-13a5-4579-83df-2d762687937d/terraform test_name=TestAccFederatedDatabaseInstance_basic
2025-06-22T00:46:59.3047303Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (923.77s)
```
### 2025-06-23
#### PASS 14 minutes
```
2025-06-23T00:45:10.8976880Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-06-23T00:45:10.8977838Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-789351740098885206
2025-06-23T00:45:10.8979466Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-23T00:45:10.8981806Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-23T00:45:10.8982865Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:31:02.37518574Z, ProjectID: 6858a03fee34e36cf9c501ac, Cluster name: test-acc-tf-c-2992960421921411198
2025-06-23T00:45:10.8997339Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (855.67s)
```
### 2025-06-24
#### PASS 13 minutes
```
2025-06-24T00:41:55.7870146Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-06-24T00:41:55.7871178Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-866561163117535396
2025-06-24T00:41:55.7873487Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-24T00:41:55.7875258Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-24T00:41:55.7876274Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:28:58.990022164Z, ProjectID: 6859f14222100658cf265c5e, Cluster name: test-acc-tf-c-579459806504264140
2025-06-24T00:41:55.7892567Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (784.74s)
```
### 2025-06-25
#### PASS 14 minutes
```
2025-06-25T00:43:35.3859407Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-06-25T00:43:35.3860901Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-5201392342833040843
2025-06-25T00:43:35.3864567Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-25T00:43:35.3866557Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-25T00:43:35.3868108Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:29:21.19671709Z, ProjectID: 685b42dab37149039973c30f, Cluster name: test-acc-tf-c-6547335567485642050
2025-06-25T00:43:35.3893488Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (860.48s)
```
### 2025-06-26
#### PASS 14 minutes
```
2025-06-26T00:43:16.8362120Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-06-26T00:43:16.8363063Z     resource_federated_database_instance_test.go:114: Creating execution project: test-acc-tf-p-6046208413555939179
2025-06-26T00:43:16.8364584Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-26T00:43:16.8366857Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-06-26T00:43:16.8368052Z     pre_check.go:40: Time before creating cluster: 2025-06-26T00:29:09.62448159Z, ProjectID: 685c944e1b4e2c6e5fe43979, Cluster name: test-acc-tf-c-8554445198498641918
2025-06-26T00:43:16.8382680Z --- PASS: TestAccFederatedDatabaseInstance_atlasCluster (853.92s)
```