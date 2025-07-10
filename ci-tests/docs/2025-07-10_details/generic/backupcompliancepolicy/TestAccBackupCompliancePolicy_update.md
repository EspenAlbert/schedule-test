# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 5)
Success rate: 95.69%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029530000) |  | qa |  | 1.03s
[2025-06-05 00:28](#error-2025-06-05t0028560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.06s
[2025-06-22 00:44](#error-2025-06-22t0044340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574eebab82446d9bfb061b/limits | qa | flaky_500 | 33.01s
[2025-06-29 00:46](#error-2025-06-29t0046260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898849709c3a5a3c8ae7/limits | qa | flaky_500 | 68.02s
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c402690ae45e168bcdfc/limits | qa | flaky_500 | 67.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 9 seconds
- 2025-04-13 PASS 11 seconds
- 2025-04-14 PASS 8 seconds
- 2025-04-15 PASS 11 seconds
- 2025-04-16
  - PASS 8 seconds
  - PASS 12 seconds
- 2025-04-17 PASS 11 seconds
- 2025-04-18 PASS 9 seconds
- 2025-04-19 PASS 12 seconds
- 2025-04-20 PASS 9 seconds
- 2025-04-21 PASS 9 seconds
- 2025-04-22 PASS 8 seconds
- 2025-04-23 PASS 8 seconds
- 2025-04-24 PASS 11 seconds
- 2025-04-25 PASS 11 seconds
- 2025-04-26 PASS 30 seconds
- 2025-04-27 PASS 8 seconds
- 2025-04-28 PASS 9 seconds
- 2025-04-29 PASS 9 seconds
- 2025-04-30
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-05-01
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-05-02 PASS 9 seconds
- 2025-05-03 PASS 8 seconds
- 2025-05-04 PASS 13 seconds
- 2025-05-05 PASS 10 seconds
- 2025-05-06 PASS 8 seconds
- 2025-05-07 PASS 8 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 9 seconds
- 2025-05-10 PASS 15 seconds
- 2025-05-11

### Error 2025-05-11T00:29:53+00:00
```
2025-05-11T00:29:53.7313040Z === RUN   TestAccBackupCompliancePolicy_update
2025-05-11T00:29:53.7318416Z === CONT  TestAccBackupCompliancePolicy_update
2025-05-11T00:29:53.7382952Z === NAME  TestAccBackupCompliancePolicy_update
2025-05-11T00:29:53.7383916Z     resource_backup_compliance_policy_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.7384778Z         
2025-05-11T00:29:53.7385399Z         Error: error creating project: test-acc-tf-p-3013051541204104753
2025-05-11T00:29:53.7385835Z         
2025-05-11T00:29:53.7386201Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.7386890Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.7387705Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.7388072Z         
2025-05-11T00:29:53.7388604Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.7389077Z         type
2025-05-11T00:29:53.7395967Z   
2025-05-11T00:29:53.7402889Z --- FAIL: TestAccBackupCompliancePolicy_update (1.26s)
```

- 2025-05-12 PASS 9 seconds
- 2025-05-13
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-05-14 PASS 12 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 10 seconds
- 2025-05-17 PASS 7 seconds
- 2025-05-18 PASS 10 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 12 seconds
- 2025-05-21 PASS 7 seconds
- 2025-05-22 PASS 12 seconds
- 2025-05-23 PASS 12 seconds
- 2025-05-24 PASS 9 seconds
- 2025-05-25 PASS 8 seconds
- 2025-05-26 PASS 13 seconds
- 2025-05-27
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-05-29
  - PASS 11 seconds
  - PASS 8 seconds
- 2025-05-30 PASS 10 seconds
- 2025-05-31 PASS 10 seconds
- 2025-06-01
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-02
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 11 seconds
- 2025-06-03 PASS 9 seconds
- 2025-06-04 PASS 13 seconds
- 2025-06-05

### Error 2025-06-05T00:28:56+00:00
```
2025-06-05T00:28:56.4028344Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-05T00:28:56.4038469Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-05T00:28:56.4163994Z === NAME  TestAccBackupCompliancePolicy_update
2025-06-05T00:28:56.4165250Z     resource_backup_compliance_policy_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:56.4166256Z         
2025-06-05T00:28:56.4167161Z         Error: error creating project: test-acc-tf-p-235852038843333189
2025-06-05T00:28:56.4167949Z         
2025-06-05T00:28:56.4168625Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4170089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4171289Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4171980Z         
2025-06-05T00:28:56.4173006Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4174341Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4175571Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4197335Z    test_name=TestAccBackupCompliancePolicy_basic
2025-06-05T00:28:56.4211314Z --- FAIL: TestAccBackupCompliancePolicy_update (2.55s)
```

- 2025-06-06 PASS 10 seconds
- 2025-06-07 PASS 7 seconds
- 2025-06-08 PASS 11 seconds
- 2025-06-09 PASS 8 seconds
- 2025-06-10 PASS 8 seconds
- 2025-06-11
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-06-12 PASS 8 seconds
- 2025-06-13 PASS 10 seconds
- 2025-06-14 PASS a minute
- 2025-06-15 PASS a minute
- 2025-06-16 PASS a minute
- 2025-06-17 PASS a minute
- 2025-06-18 PASS a minute
- 2025-06-19 PASS a minute
- 2025-06-20 PASS a minute
- 2025-06-21 PASS a minute
- 2025-06-22

### Error 2025-06-22T00:44:34+00:00
```
2025-06-22T00:44:34.6641837Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-22T00:44:34.6648829Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-22T00:44:34.6687573Z === NAME  TestAccBackupCompliancePolicy_update
2025-06-22T00:44:34.6688288Z     resource_backup_compliance_policy_test.go:34: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:34.6688795Z         
2025-06-22T00:44:34.6689231Z         Error: error when getting project properties after create
2025-06-22T00:44:34.6689625Z         
2025-06-22T00:44:34.6689975Z           with mongodbatlas_project.test,
2025-06-22T00:44:34.6690624Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:44:34.6691229Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:44:34.6691586Z         
2025-06-22T00:44:34.6692086Z         error getting project (68574eebab82446d9bfb061b): error getting project's
2025-06-22T00:44:34.6692608Z         limits (68574eebab82446d9bfb061b):
2025-06-22T00:44:34.6693484Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eebab82446d9bfb061b/limits
2025-06-22T00:44:34.6694223Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:34.6695008Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:34.6695565Z         BadRequestDetail: 
2025-06-22T00:44:34.6695935Z --- FAIL: TestAccBackupCompliancePolicy_update (33.05s)
```

- 2025-06-23 PASS a minute
- 2025-06-24 PASS a minute
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29

### Error 2025-06-29T00:46:26+00:00
```
2025-06-29T00:46:26.6039809Z === RUN   TestAccBackupCompliancePolicy_update
2025-06-29T00:46:26.6044855Z === CONT  TestAccBackupCompliancePolicy_update
2025-06-29T00:46:26.6085752Z === NAME  TestAccBackupCompliancePolicy_update
2025-06-29T00:46:26.6086696Z     resource_backup_compliance_policy_test.go:34: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-06-29T00:46:26.6087238Z         
2025-06-29T00:46:26.6087690Z         Error: error when getting project properties after create
2025-06-29T00:46:26.6088086Z         
2025-06-29T00:46:26.6088441Z           with mongodbatlas_project.test,
2025-06-29T00:46:26.6089118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:46:26.6089731Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:46:26.6090093Z         
2025-06-29T00:46:26.6090600Z         error getting project (6860898849709c3a5a3c8ae7): error getting project's
2025-06-29T00:46:26.6091120Z         limits (6860898849709c3a5a3c8ae7):
2025-06-29T00:46:26.6091751Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898849709c3a5a3c8ae7/limits
2025-06-29T00:46:26.6092617Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:46:26.6093283Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:46:26.6093745Z         BadRequestDetail: 
2025-06-29T00:46:26.6094125Z --- FAIL: TestAccBackupCompliancePolicy_update (68.22s)
```

- 2025-06-30 PASS a minute
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
```
2025-07-06T00:46:50.0774279Z === RUN   TestAccBackupCompliancePolicy_update
2025-07-06T00:46:50.0783345Z === CONT  TestAccBackupCompliancePolicy_update
2025-07-06T00:46:50.0956277Z === NAME  TestAccBackupCompliancePolicy_update
2025-07-06T00:46:50.0957590Z     resource_backup_compliance_policy_test.go:34: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:46:50.0958582Z         
2025-07-06T00:46:50.0959354Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0960046Z         
2025-07-06T00:46:50.0960664Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0961849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0963082Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0963708Z         
2025-07-06T00:46:50.0964612Z         error getting project (6869c402690ae45e168bcdfc): error getting project's
2025-07-06T00:46:50.0965541Z         limits (6869c402690ae45e168bcdfc):
2025-07-06T00:46:50.0966676Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bcdfc/limits
2025-07-06T00:46:50.0968018Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0969208Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0970020Z         BadRequestDetail: 
2025-07-06T00:46:50.0970652Z --- FAIL: TestAccBackupCompliancePolicy_update (67.48s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10 PASS a minute