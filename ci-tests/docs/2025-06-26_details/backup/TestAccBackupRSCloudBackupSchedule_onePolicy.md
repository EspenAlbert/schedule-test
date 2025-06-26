# backup/TestAccBackupRSCloudBackupSchedule_onePolicy Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 7)
Success rate: 100.00%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 14 minutes
```
2025-06-20T00:43:11.9482991Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-20T00:43:11.9515320Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-20T00:43:11.9523764Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-20T00:43:11.9524892Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:29:04.297521249Z, ProjectID: 6854ab3acd32be2bdf8bff40, Cluster name: test-acc-tf-c-2362914822956810890
2025-06-20T00:43:11.9541863Z --- PASS: TestAccBackupRSCloudBackupSchedule_onePolicy (865.80s)
```
### 2025-06-21
#### PASS 11 minutes
```
2025-06-21T00:43:13.6554552Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-21T00:43:13.6564242Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-21T00:43:13.6582079Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-21T00:43:13.6583043Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:29:16.598873371Z, ProjectID: 6855fcadfadf221ee30c6992, Cluster name: test-acc-tf-c-443758905622897727
2025-06-21T00:43:13.6587279Z --- PASS: TestAccBackupRSCloudBackupSchedule_onePolicy (718.58s)
```
### 2025-06-22
#### PASS 14 minutes
```
2025-06-22T00:47:02.3459151Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-22T00:47:02.3469361Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-22T00:47:02.3510674Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-22T00:47:02.3512338Z     pre_check.go:40: Time before creating cluster: 2025-06-22T00:32:04.720589074Z, ProjectID: 68574eefab82446d9bfb07a7, Cluster name: test-acc-tf-c-1443699407148436949
2025-06-22T00:47:02.3530646Z --- PASS: TestAccBackupRSCloudBackupSchedule_onePolicy (885.25s)
```
### 2025-06-23
#### PASS 12 minutes
```
2025-06-23T00:44:27.5601260Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-23T00:44:27.5608835Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-23T00:44:27.5623543Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-23T00:44:27.5624445Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:31:37.432220841Z, ProjectID: 6858a0449c500e6d1cbd5c53, Cluster name: test-acc-tf-c-6811043434117278619
2025-06-23T00:44:27.5631015Z --- PASS: TestAccBackupRSCloudBackupSchedule_onePolicy (779.70s)
```
### 2025-06-24
#### PASS 12 minutes
```
2025-06-24T00:41:57.0655560Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-24T00:41:57.0666314Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-24T00:41:57.0710215Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-24T00:41:57.0711821Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:29:22.877238054Z, ProjectID: 6859f1432c29f60dd540f9d3, Cluster name: test-acc-tf-c-6031364714848821763
2025-06-24T00:41:57.0721966Z --- PASS: TestAccBackupRSCloudBackupSchedule_onePolicy (766.96s)
```
### 2025-06-25
#### PASS 10 minutes
```
2025-06-25T01:02:19.4781117Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-25T01:02:19.4788103Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-25T01:02:19.4799453Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-25T01:02:19.4800314Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:29:46.704901049Z, ProjectID: 685b42d5b37149039973c099, Cluster name: test-acc-tf-c-5094879386773647049
2025-06-25T01:02:19.4804828Z --- PASS: TestAccBackupRSCloudBackupSchedule_onePolicy (623.43s)
```
### 2025-06-26
#### PASS 13 minutes
```
2025-06-26T00:43:02.2861829Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-26T00:43:02.2889682Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-26T00:43:02.2901580Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2025-06-26T00:43:02.2902575Z     pre_check.go:40: Time before creating cluster: 2025-06-26T00:29:56.507362994Z, ProjectID: 685c94551b4e2c6e5fe43e25, Cluster name: test-acc-tf-c-4069238664388105467
2025-06-26T00:43:02.2905094Z 2025/06/26 00:30:01 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c94551b4e2c6e5fe43e25/cloudProviderAccess/685c94871b4e2c6e5fe4525f PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6126366442625487113). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6126366442625487113], BadRequestDetail:  
2025-06-26T00:43:02.2907272Z 2025/06/26 00:30:01 retrying
2025-06-26T00:43:02.2911960Z --- PASS: TestAccBackupRSCloudBackupSchedule_onePolicy (830.20s)
```