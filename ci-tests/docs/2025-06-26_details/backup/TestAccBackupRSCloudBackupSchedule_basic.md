# backup/TestAccBackupRSCloudBackupSchedule_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 7)
Success rate: 100.00%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 13 minutes
```
2025-06-20T00:43:11.9479055Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-06-20T00:43:11.9516011Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-06-20T00:43:11.9527774Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-06-20T00:43:11.9528742Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:29:14.30340032Z, ProjectID: 6854ab3acd32be2bdf8bff40, Cluster name: test-acc-tf-c-72644759697986881
2025-06-20T00:43:11.9539818Z --- PASS: TestAccBackupRSCloudBackupSchedule_basic (829.10s)
```
### 2025-06-21
#### PASS 14 minutes
```
2025-06-21T00:43:13.6552012Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-06-21T00:43:13.6561907Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-06-21T00:43:13.6567604Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-06-21T00:43:13.6568615Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:28:46.592577869Z, ProjectID: 6855fcadfadf221ee30c6992, Cluster name: test-acc-tf-c-8501527588517600143
2025-06-21T00:43:13.6588165Z --- PASS: TestAccBackupRSCloudBackupSchedule_basic (874.73s)
```
### 2025-06-22
#### PASS 12 minutes
```
2025-06-22T00:47:02.3456663Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-06-22T00:47:02.3470789Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-06-22T00:47:02.3523369Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-06-22T00:47:02.3525056Z     pre_check.go:40: Time before creating cluster: 2025-06-22T00:32:24.724524201Z, ProjectID: 68574eefab82446d9bfb07a7, Cluster name: test-acc-tf-c-1442862466263592123
2025-06-22T00:47:02.3529798Z --- PASS: TestAccBackupRSCloudBackupSchedule_basic (777.66s)
```
### 2025-06-23
#### PASS 12 minutes
```
2025-06-23T00:44:27.5599702Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-06-23T00:44:27.5607629Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-06-23T00:44:27.5616325Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-06-23T00:44:27.5617208Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:31:22.428831867Z, ProjectID: 6858a0449c500e6d1cbd5c53, Cluster name: test-acc-tf-c-7797715628333933469
2025-06-23T00:44:27.5619450Z 2025/06/23 00:31:26 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0449c500e6d1cbd5c53/cloudProviderAccess/6858a05dee34e36cf9c51558 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3461448630450689351). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3461448630450689351], BadRequestDetail:  
2025-06-23T00:44:27.5621472Z 2025/06/23 00:31:26 retrying
2025-06-23T00:44:27.5630583Z --- PASS: TestAccBackupRSCloudBackupSchedule_basic (779.15s)
```
### 2025-06-24
#### PASS 13 minutes
```
2025-06-24T00:41:57.0652859Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-06-24T00:41:57.0665659Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-06-24T00:41:57.0713001Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-06-24T00:41:57.0714806Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:29:27.87935999Z, ProjectID: 6859f1432c29f60dd540f9d3, Cluster name: test-acc-tf-c-171207219436421442
2025-06-24T00:41:57.0722724Z --- PASS: TestAccBackupRSCloudBackupSchedule_basic (783.78s)
```
### 2025-06-25
#### PASS 13 minutes
```
2025-06-25T01:02:19.4779652Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-06-25T01:02:19.4786951Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-06-25T01:02:19.4792510Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-06-25T01:02:19.4793340Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:29:31.700568494Z, ProjectID: 685b42d5b37149039973c099, Cluster name: test-acc-tf-c-5537059101914625870
2025-06-25T01:02:19.4795555Z 2025/06/25 00:29:35 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42d5b37149039973c099/cloudProviderAccess/685b42eeb37149039973cfc4 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5480554959809818759). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5480554959809818759], BadRequestDetail:  
2025-06-25T01:02:19.4797446Z 2025/06/25 00:29:35 retrying
2025-06-25T01:02:19.4807701Z --- PASS: TestAccBackupRSCloudBackupSchedule_basic (801.78s)
```
### 2025-06-26
#### PASS 13 minutes
```
2025-06-26T00:43:02.2858811Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2025-06-26T00:43:02.2886773Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2025-06-26T00:43:02.2894157Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2025-06-26T00:43:02.2895155Z     pre_check.go:40: Time before creating cluster: 2025-06-26T00:29:26.500688238Z, ProjectID: 685c94551b4e2c6e5fe43e25, Cluster name: test-acc-tf-c-4100311454885668187
2025-06-26T00:43:02.2910846Z --- PASS: TestAccBackupRSCloudBackupSchedule_basic (804.03s)
```