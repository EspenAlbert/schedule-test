# generic/auditing/TestMigGenericAuditing_basic Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 98) FAIL(x 12) SKIP(x 6)
Success rate: 89.09%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-01 00:28 | dev | 8.03s
2025-05-01 02:00 | dev | 8.03s
2025-05-01 03:27 | dev | 5.06s
2025-05-01 04:52 | dev | 8.03s
2025-05-01 06:19 | dev | 9.09s
2025-05-01 07:43 | dev | 8.01s
2025-05-01 09:08 | dev | 9.06s
2025-05-02 00:27 | dev | 8.06s
2025-05-03 00:27 | dev | 7.00s
2025-05-04 00:31 | qa | 8.01s
2025-05-05 00:30 | dev | 9.05s
2025-05-11 00:29 | qa | 0.03s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 8 seconds
### 2025-04-12
#### PASS 10 seconds
### 2025-04-13
#### PASS 12 seconds
### 2025-04-14
#### PASS 9 seconds
### 2025-04-15
#### PASS 13 seconds
### 2025-04-16
#### PASS 11 seconds
#### PASS 11 seconds
### 2025-04-17
#### PASS 12 seconds
### 2025-04-18
#### PASS 11 seconds
### 2025-04-19
#### PASS 10 seconds
### 2025-04-20
#### PASS 10 seconds
### 2025-04-21
#### PASS 10 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 8 seconds
### 2025-04-24
#### PASS 9 seconds
### 2025-04-25
#### PASS 13 seconds
### 2025-04-26
#### SKIP unknown
### 2025-04-27
#### SKIP unknown
### 2025-04-28
#### SKIP unknown
### 2025-04-29
#### SKIP unknown
### 2025-04-30
#### SKIP unknown
#### SKIP unknown
### 2025-05-01
#### FAIL 8 seconds
```
2025-05-01T00:28:49.9489859Z === RUN   TestMigGenericAuditing_basic
2025-05-01T00:28:49.9491144Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-7343516782927865301
2025-05-01T00:28:49.9517511Z    test_name=TestMigGenericAuditing_basic
2025-05-01T00:28:49.9518950Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-01T00:28:49.9520027Z         stdout:
2025-05-01T00:28:49.9520554Z         
2025-05-01T00:28:49.9551393Z         Terraform used the selected providers to generate the following execution
2025-05-01T00:28:49.9552659Z         plan. Resource actions are indicated with the following symbols:
2025-05-01T00:28:49.9553522Z           ~ update in-place
2025-05-01T00:28:49.9554182Z          <= read (data resources)
2025-05-01T00:28:49.9554753Z         
2025-05-01T00:28:49.9555443Z         Terraform will perform the following actions:
2025-05-01T00:28:49.9556292Z         
2025-05-01T00:28:49.9557154Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-01T00:28:49.9558282Z           # (depends on a resource or a module with changes pending)
2025-05-01T00:28:49.9559191Z          <= data "mongodbatlas_auditing" "test" {
2025-05-01T00:28:49.9560227Z               + audit_authorization_success = (known after apply)
2025-05-01T00:28:49.9561328Z               + audit_filter                = (known after apply)
2025-05-01T00:28:49.9562431Z               + configuration_type          = (known after apply)
2025-05-01T00:28:49.9563470Z               + enabled                     = (known after apply)
2025-05-01T00:28:49.9564504Z               + id                          = (known after apply)
2025-05-01T00:28:49.9565626Z               + project_id                  = "6812c033e6fd086dacbd32bd"
2025-05-01T00:28:49.9566526Z             }
2025-05-01T00:28:49.9567028Z         
2025-05-01T00:28:49.9567836Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-01T00:28:49.9568859Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-01T00:28:49.9569803Z               ~ audit_filter                = <<-EOT
2025-05-01T00:28:49.9571736Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-01T00:28:49.9572727Z                 EOT
2025-05-01T00:28:49.9573912Z                 id                          = "6812c033e6fd086dacbd32bd"
2025-05-01T00:28:49.9574914Z                 # (4 unchanged attributes hidden)
2025-05-01T00:28:49.9575559Z             }
2025-05-01T00:28:49.9576022Z         
2025-05-01T00:28:49.9576918Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-01T00:28:49.9577649Z --- FAIL: TestMigGenericAuditing_basic (8.28s)
```
#### FAIL 8 seconds
```
2025-05-01T02:00:10.2596572Z === RUN   TestMigGenericAuditing_basic
2025-05-01T02:00:10.2598016Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-4771871027279841436
2025-05-01T02:00:10.2652432Z   
2025-05-01T02:00:10.2653173Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-01T02:00:10.2653808Z         stdout:
2025-05-01T02:00:10.2654096Z         
2025-05-01T02:00:10.2654908Z         Terraform used the selected providers to generate the following execution
2025-05-01T02:00:10.2655597Z         plan. Resource actions are indicated with the following symbols:
2025-05-01T02:00:10.2656465Z           ~ update in-place
2025-05-01T02:00:10.2656861Z          <= read (data resources)
2025-05-01T02:00:10.2657189Z         
2025-05-01T02:00:10.2657594Z         Terraform will perform the following actions:
2025-05-01T02:00:10.2657969Z         
2025-05-01T02:00:10.2658455Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-01T02:00:10.2659084Z           # (depends on a resource or a module with changes pending)
2025-05-01T02:00:10.2659600Z          <= data "mongodbatlas_auditing" "test" {
2025-05-01T02:00:10.2660194Z               + audit_authorization_success = (known after apply)
2025-05-01T02:00:10.2660794Z               + audit_filter                = (known after apply)
2025-05-01T02:00:10.2661384Z               + configuration_type          = (known after apply)
2025-05-01T02:00:10.2661967Z               + enabled                     = (known after apply)
2025-05-01T02:00:10.2662520Z               + id                          = (known after apply)
2025-05-01T02:00:10.2663122Z               + project_id                  = "6812d59ce6fd086dacbd7221"
2025-05-01T02:00:10.2663533Z             }
2025-05-01T02:00:10.2663810Z         
2025-05-01T02:00:10.2664294Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-01T02:00:10.2665110Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-01T02:00:10.2665643Z               ~ audit_filter                = <<-EOT
2025-05-01T02:00:10.2666951Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-01T02:00:10.2667504Z                 EOT
2025-05-01T02:00:10.2668389Z                 id                          = "6812d59ce6fd086dacbd7221"
2025-05-01T02:00:10.2668947Z                 # (4 unchanged attributes hidden)
2025-05-01T02:00:10.2669313Z             }
2025-05-01T02:00:10.2669583Z         
2025-05-01T02:00:10.2669965Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-01T02:00:10.2670373Z --- FAIL: TestMigGenericAuditing_basic (8.32s)
```
#### FAIL 5 seconds
```
2025-05-01T03:27:13.0971115Z === RUN   TestMigGenericAuditing_basic
2025-05-01T03:27:13.0979617Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-6955002310918244256
2025-05-01T03:27:13.0998081Z   
2025-05-01T03:27:13.0998766Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-01T03:27:13.0999376Z         stdout:
2025-05-01T03:27:13.0999649Z         
2025-05-01T03:27:13.1000420Z         Terraform used the selected providers to generate the following execution
2025-05-01T03:27:13.1001094Z         plan. Resource actions are indicated with the following symbols:
2025-05-01T03:27:13.1001580Z           ~ update in-place
2025-05-01T03:27:13.1001950Z          <= read (data resources)
2025-05-01T03:27:13.1002268Z         
2025-05-01T03:27:13.1002656Z         Terraform will perform the following actions:
2025-05-01T03:27:13.1003019Z         
2025-05-01T03:27:13.1003492Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-01T03:27:13.1004114Z           # (depends on a resource or a module with changes pending)
2025-05-01T03:27:13.1004621Z          <= data "mongodbatlas_auditing" "test" {
2025-05-01T03:27:13.1005210Z               + audit_authorization_success = (known after apply)
2025-05-01T03:27:13.1005804Z               + audit_filter                = (known after apply)
2025-05-01T03:27:13.1006556Z               + configuration_type          = (known after apply)
2025-05-01T03:27:13.1007147Z               + enabled                     = (known after apply)
2025-05-01T03:27:13.1007737Z               + id                          = (known after apply)
2025-05-01T03:27:13.1008667Z               + project_id                  = "6812ea06ed10397068f807e3"
2025-05-01T03:27:13.1009226Z             }
2025-05-01T03:27:13.1009495Z         
2025-05-01T03:27:13.1009949Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-01T03:27:13.1010484Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-01T03:27:13.1010997Z               ~ audit_filter                = <<-EOT
2025-05-01T03:27:13.1012021Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-01T03:27:13.1012574Z                 EOT
2025-05-01T03:27:13.1013272Z                 id                          = "6812ea06ed10397068f807e3"
2025-05-01T03:27:13.1013807Z                 # (4 unchanged attributes hidden)
2025-05-01T03:27:13.1014167Z             }
2025-05-01T03:27:13.1014428Z         
2025-05-01T03:27:13.1014801Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-01T03:27:13.1015197Z --- FAIL: TestMigGenericAuditing_basic (5.60s)
```
#### FAIL 8 seconds
```
2025-05-01T04:52:07.4875157Z === RUN   TestMigGenericAuditing_basic
2025-05-01T04:52:07.4876741Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-4960006649650598225
2025-05-01T04:52:07.4904840Z    test_terraform_path=/home/runner/work/_temp/ab6a3535-a93d-4fed-b81f-2da50902d55a/terraform test_name=TestMigGenericAuditing_basic test_working_directory=/tmp/plugintest489709636
2025-05-01T04:52:07.4907043Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-01T04:52:07.4908143Z         stdout:
2025-05-01T04:52:07.4908643Z         
2025-05-01T04:52:07.4910035Z         Terraform used the selected providers to generate the following execution
2025-05-01T04:52:07.4911237Z         plan. Resource actions are indicated with the following symbols:
2025-05-01T04:52:07.4912096Z           ~ update in-place
2025-05-01T04:52:07.4912766Z          <= read (data resources)
2025-05-01T04:52:07.4939230Z         
2025-05-01T04:52:07.4940019Z         Terraform will perform the following actions:
2025-05-01T04:52:07.4940712Z         
2025-05-01T04:52:07.4941582Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-01T04:52:07.4942696Z           # (depends on a resource or a module with changes pending)
2025-05-01T04:52:07.4943628Z          <= data "mongodbatlas_auditing" "test" {
2025-05-01T04:52:07.4944835Z               + audit_authorization_success = (known after apply)
2025-05-01T04:52:07.4945944Z               + audit_filter                = (known after apply)
2025-05-01T04:52:07.4947003Z               + configuration_type          = (known after apply)
2025-05-01T04:52:07.4948058Z               + enabled                     = (known after apply)
2025-05-01T04:52:07.4949073Z               + id                          = (known after apply)
2025-05-01T04:52:07.4950153Z               + project_id                  = "6812fdeced10397068f84c9a"
2025-05-01T04:52:07.4950889Z             }
2025-05-01T04:52:07.4951381Z         
2025-05-01T04:52:07.4952187Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-01T04:52:07.4953136Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-01T04:52:07.4954196Z               ~ audit_filter                = <<-EOT
2025-05-01T04:52:07.4956042Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-01T04:52:07.4957040Z                 EOT
2025-05-01T04:52:07.4958193Z                 id                          = "6812fdeced10397068f84c9a"
2025-05-01T04:52:07.4959152Z                 # (4 unchanged attributes hidden)
2025-05-01T04:52:07.4959813Z             }
2025-05-01T04:52:07.4960302Z         
2025-05-01T04:52:07.4960976Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-01T04:52:07.4961695Z --- FAIL: TestMigGenericAuditing_basic (8.28s)
```
#### FAIL 9 seconds
```
2025-05-01T06:19:55.0424387Z === RUN   TestMigGenericAuditing_basic
2025-05-01T06:19:55.0425779Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-5182642610986347076
2025-05-01T06:19:55.0450699Z   
2025-05-01T06:19:55.0451855Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-01T06:19:55.0452922Z         stdout:
2025-05-01T06:19:55.0453215Z         
2025-05-01T06:19:55.0454002Z         Terraform used the selected providers to generate the following execution
2025-05-01T06:19:55.0454685Z         plan. Resource actions are indicated with the following symbols:
2025-05-01T06:19:55.0455170Z           ~ update in-place
2025-05-01T06:19:55.0455546Z          <= read (data resources)
2025-05-01T06:19:55.0455871Z         
2025-05-01T06:19:55.0456266Z         Terraform will perform the following actions:
2025-05-01T06:19:55.0456625Z         
2025-05-01T06:19:55.0457108Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-01T06:19:55.0457940Z           # (depends on a resource or a module with changes pending)
2025-05-01T06:19:55.0458451Z          <= data "mongodbatlas_auditing" "test" {
2025-05-01T06:19:55.0459033Z               + audit_authorization_success = (known after apply)
2025-05-01T06:19:55.0459628Z               + audit_filter                = (known after apply)
2025-05-01T06:19:55.0460213Z               + configuration_type          = (known after apply)
2025-05-01T06:19:55.0460786Z               + enabled                     = (known after apply)
2025-05-01T06:19:55.0461337Z               + id                          = (known after apply)
2025-05-01T06:19:55.0461948Z               + project_id                  = "6813127ced10397068f8a4d1"
2025-05-01T06:19:55.0462344Z             }
2025-05-01T06:19:55.0462614Z         
2025-05-01T06:19:55.0463066Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-01T06:19:55.0463606Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-01T06:19:55.0464125Z               ~ audit_filter                = <<-EOT
2025-05-01T06:19:55.0465163Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-01T06:19:55.0465730Z                 EOT
2025-05-01T06:19:55.0466452Z                 id                          = "6813127ced10397068f8a4d1"
2025-05-01T06:19:55.0466994Z                 # (4 unchanged attributes hidden)
2025-05-01T06:19:55.0467363Z             }
2025-05-01T06:19:55.0467867Z         
2025-05-01T06:19:55.0468262Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-01T06:19:55.0468670Z --- FAIL: TestMigGenericAuditing_basic (9.92s)
```
#### FAIL 8 seconds
```
2025-05-01T07:43:54.5817619Z === RUN   TestMigGenericAuditing_basic
2025-05-01T07:43:54.5819031Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-1317889817092857310
2025-05-01T07:43:54.5842134Z    test_step_number=1 test_name=TestMigGenericAuditing_basic test_terraform_path=/home/runner/work/_temp/c1e8423b-fb47-496d-bf89-ddce022e9afa/terraform
2025-05-01T07:43:54.5843727Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-01T07:43:54.5844484Z         stdout:
2025-05-01T07:43:54.5874390Z         
2025-05-01T07:43:54.5875992Z         Terraform used the selected providers to generate the following execution
2025-05-01T07:43:54.5877105Z         plan. Resource actions are indicated with the following symbols:
2025-05-01T07:43:54.5877934Z           ~ update in-place
2025-05-01T07:43:54.5878566Z          <= read (data resources)
2025-05-01T07:43:54.5879109Z         
2025-05-01T07:43:54.5879755Z         Terraform will perform the following actions:
2025-05-01T07:43:54.5880346Z         
2025-05-01T07:43:54.5880958Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-01T07:43:54.5881607Z           # (depends on a resource or a module with changes pending)
2025-05-01T07:43:54.5882132Z          <= data "mongodbatlas_auditing" "test" {
2025-05-01T07:43:54.5882939Z               + audit_authorization_success = (known after apply)
2025-05-01T07:43:54.5883876Z               + audit_filter                = (known after apply)
2025-05-01T07:43:54.5884493Z               + configuration_type          = (known after apply)
2025-05-01T07:43:54.5885074Z               + enabled                     = (known after apply)
2025-05-01T07:43:54.5885628Z               + id                          = (known after apply)
2025-05-01T07:43:54.5886225Z               + project_id                  = "6813262c13d6b32170ff4a0b"
2025-05-01T07:43:54.5886625Z             }
2025-05-01T07:43:54.5886897Z         
2025-05-01T07:43:54.5887351Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-01T07:43:54.5887901Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-01T07:43:54.5888434Z               ~ audit_filter                = <<-EOT
2025-05-01T07:43:54.5889466Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-01T07:43:54.5890023Z                 EOT
2025-05-01T07:43:54.5890782Z                 id                          = "6813262c13d6b32170ff4a0b"
2025-05-01T07:43:54.5891332Z                 # (4 unchanged attributes hidden)
2025-05-01T07:43:54.5891712Z             }
2025-05-01T07:43:54.5891983Z         
2025-05-01T07:43:54.5892605Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-01T07:43:54.5893030Z --- FAIL: TestMigGenericAuditing_basic (8.13s)
```
#### FAIL 9 seconds
```
2025-05-01T09:08:27.1973138Z === RUN   TestMigGenericAuditing_basic
2025-05-01T09:08:27.1980937Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-2288628601582799411
2025-05-01T09:08:27.2019192Z    test_working_directory=/tmp/plugintest4218237457 test_step_number=1 test_name=TestMigGenericAuditing_basic
2025-05-01T09:08:27.2020973Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-01T09:08:27.2022042Z         stdout:
2025-05-01T09:08:27.2022491Z         
2025-05-01T09:08:27.2023847Z         Terraform used the selected providers to generate the following execution
2025-05-01T09:08:27.2025227Z         plan. Resource actions are indicated with the following symbols:
2025-05-01T09:08:27.2026074Z           ~ update in-place
2025-05-01T09:08:27.2026710Z          <= read (data resources)
2025-05-01T09:08:27.2027235Z         
2025-05-01T09:08:27.2027923Z         Terraform will perform the following actions:
2025-05-01T09:08:27.2028637Z         
2025-05-01T09:08:27.2056831Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-01T09:08:27.2057987Z           # (depends on a resource or a module with changes pending)
2025-05-01T09:08:27.2058902Z          <= data "mongodbatlas_auditing" "test" {
2025-05-01T09:08:27.2059957Z               + audit_authorization_success = (known after apply)
2025-05-01T09:08:27.2061049Z               + audit_filter                = (known after apply)
2025-05-01T09:08:27.2062120Z               + configuration_type          = (known after apply)
2025-05-01T09:08:27.2063170Z               + enabled                     = (known after apply)
2025-05-01T09:08:27.2064352Z               + id                          = (known after apply)
2025-05-01T09:08:27.2065455Z               + project_id                  = "681339fef7db2d257067de63"
2025-05-01T09:08:27.2066135Z             }
2025-05-01T09:08:27.2066576Z         
2025-05-01T09:08:27.2067380Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-01T09:08:27.2068328Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-01T09:08:27.2069255Z               ~ audit_filter                = <<-EOT
2025-05-01T09:08:27.2071197Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-01T09:08:27.2072158Z                 EOT
2025-05-01T09:08:27.2073363Z                 id                          = "681339fef7db2d257067de63"
2025-05-01T09:08:27.2074487Z                 # (4 unchanged attributes hidden)
2025-05-01T09:08:27.2075110Z             }
2025-05-01T09:08:27.2075550Z         
2025-05-01T09:08:27.2076185Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-01T09:08:27.2076850Z --- FAIL: TestMigGenericAuditing_basic (9.63s)
```
### 2025-05-02
#### FAIL 8 seconds
```
2025-05-02T00:27:51.7668300Z === RUN   TestMigGenericAuditing_basic
2025-05-02T00:27:51.7669310Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-6995327284020439726
2025-05-02T00:27:51.7695779Z    test_working_directory=/tmp/plugintest1446963679 test_name=TestMigGenericAuditing_basic
2025-05-02T00:27:51.7697214Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-02T00:27:51.7698356Z         stdout:
2025-05-02T00:27:51.7698662Z         
2025-05-02T00:27:51.7699480Z         Terraform used the selected providers to generate the following execution
2025-05-02T00:27:51.7700190Z         plan. Resource actions are indicated with the following symbols:
2025-05-02T00:27:51.7700912Z           ~ update in-place
2025-05-02T00:27:51.7701312Z          <= read (data resources)
2025-05-02T00:27:51.7701652Z         
2025-05-02T00:27:51.7702064Z         Terraform will perform the following actions:
2025-05-02T00:27:51.7721155Z         
2025-05-02T00:27:51.7722087Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-02T00:27:51.7723343Z           # (depends on a resource or a module with changes pending)
2025-05-02T00:27:51.7724327Z          <= data "mongodbatlas_auditing" "test" {
2025-05-02T00:27:51.7725220Z               + audit_authorization_success = (known after apply)
2025-05-02T00:27:51.7725872Z               + audit_filter                = (known after apply)
2025-05-02T00:27:51.7726503Z               + configuration_type          = (known after apply)
2025-05-02T00:27:51.7727116Z               + enabled                     = (known after apply)
2025-05-02T00:27:51.7727696Z               + id                          = (known after apply)
2025-05-02T00:27:51.7728330Z               + project_id                  = "6814117be5d1950b80d83832"
2025-05-02T00:27:51.7728755Z             }
2025-05-02T00:27:51.7729053Z         
2025-05-02T00:27:51.7729532Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-02T00:27:51.7730105Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-02T00:27:51.7730910Z               ~ audit_filter                = <<-EOT
2025-05-02T00:27:51.7731991Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-02T00:27:51.7732573Z                 EOT
2025-05-02T00:27:51.7733335Z                 id                          = "6814117be5d1950b80d83832"
2025-05-02T00:27:51.7733906Z                 # (4 unchanged attributes hidden)
2025-05-02T00:27:51.7734293Z             }
2025-05-02T00:27:51.7734578Z         
2025-05-02T00:27:51.7734975Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-02T00:27:51.7735403Z --- FAIL: TestMigGenericAuditing_basic (8.59s)
```
### 2025-05-03
#### FAIL 7 seconds
```
2025-05-03T00:27:20.8915283Z === RUN   TestMigGenericAuditing_basic
2025-05-03T00:27:20.8916503Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-2488451325405250734
2025-05-03T00:27:20.8966615Z   
2025-05-03T00:27:20.8967359Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-03T00:27:20.8968004Z         stdout:
2025-05-03T00:27:20.8968299Z         
2025-05-03T00:27:20.8969330Z         Terraform used the selected providers to generate the following execution
2025-05-03T00:27:20.8970035Z         plan. Resource actions are indicated with the following symbols:
2025-05-03T00:27:20.8970540Z           ~ update in-place
2025-05-03T00:27:20.8970940Z          <= read (data resources)
2025-05-03T00:27:20.8971283Z         
2025-05-03T00:27:20.8971696Z         Terraform will perform the following actions:
2025-05-03T00:27:20.8972089Z         
2025-05-03T00:27:20.8972596Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-03T00:27:20.8973242Z           # (depends on a resource or a module with changes pending)
2025-05-03T00:27:20.8973777Z          <= data "mongodbatlas_auditing" "test" {
2025-05-03T00:27:20.8974387Z               + audit_authorization_success = (known after apply)
2025-05-03T00:27:20.8975010Z               + audit_filter                = (known after apply)
2025-05-03T00:27:20.8975620Z               + configuration_type          = (known after apply)
2025-05-03T00:27:20.8976223Z               + enabled                     = (known after apply)
2025-05-03T00:27:20.8976801Z               + id                          = (known after apply)
2025-05-03T00:27:20.8977436Z               + project_id                  = "681562ddf5ab983d4a7634ff"
2025-05-03T00:27:20.8977853Z             }
2025-05-03T00:27:20.8978140Z         
2025-05-03T00:27:20.8978762Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-03T00:27:20.8979324Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-03T00:27:20.8979864Z               ~ audit_filter                = <<-EOT
2025-05-03T00:27:20.8980922Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-03T00:27:20.8981507Z                 EOT
2025-05-03T00:27:20.8982241Z                 id                          = "681562ddf5ab983d4a7634ff"
2025-05-03T00:27:20.8982804Z                 # (4 unchanged attributes hidden)
2025-05-03T00:27:20.8983191Z             }
2025-05-03T00:27:20.8983474Z         
2025-05-03T00:27:20.8983866Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-03T00:27:20.8984293Z --- FAIL: TestMigGenericAuditing_basic (7.04s)
```
### 2025-05-04
#### FAIL 8 seconds
```
2025-05-04T00:31:11.7066327Z === RUN   TestMigGenericAuditing_basic
2025-05-04T00:31:11.7068707Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-2016991390216005965
2025-05-04T00:31:11.7102157Z   
2025-05-04T00:31:11.7103350Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-04T00:31:11.7104409Z         stdout:
2025-05-04T00:31:11.7132540Z         
2025-05-04T00:31:11.7134061Z         Terraform used the selected providers to generate the following execution
2025-05-04T00:31:11.7135325Z         plan. Resource actions are indicated with the following symbols:
2025-05-04T00:31:11.7136239Z           ~ update in-place
2025-05-04T00:31:11.7137078Z          <= read (data resources)
2025-05-04T00:31:11.7137670Z         
2025-05-04T00:31:11.7138387Z         Terraform will perform the following actions:
2025-05-04T00:31:11.7139060Z         
2025-05-04T00:31:11.7139950Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-04T00:31:11.7141111Z           # (depends on a resource or a module with changes pending)
2025-05-04T00:31:11.7142052Z          <= data "mongodbatlas_auditing" "test" {
2025-05-04T00:31:11.7143144Z               + audit_authorization_success = (known after apply)
2025-05-04T00:31:11.7144274Z               + audit_filter                = (known after apply)
2025-05-04T00:31:11.7145388Z               + configuration_type          = (known after apply)
2025-05-04T00:31:11.7146478Z               + enabled                     = (known after apply)
2025-05-04T00:31:11.7147846Z               + id                          = (known after apply)
2025-05-04T00:31:11.7148978Z               + project_id                  = "6816b540081f2c5b7945b605"
2025-05-04T00:31:11.7149691Z             }
2025-05-04T00:31:11.7150154Z         
2025-05-04T00:31:11.7150976Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-04T00:31:11.7151961Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-04T00:31:11.7152917Z               ~ audit_filter                = <<-EOT
2025-05-04T00:31:11.7154907Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-04T00:31:11.7155917Z                 EOT
2025-05-04T00:31:11.7157555Z                 id                          = "6816b540081f2c5b7945b605"
2025-05-04T00:31:11.7158567Z                 # (4 unchanged attributes hidden)
2025-05-04T00:31:11.7159212Z             }
2025-05-04T00:31:11.7159673Z         
2025-05-04T00:31:11.7160341Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-04T00:31:11.7161046Z --- FAIL: TestMigGenericAuditing_basic (8.10s)
```
### 2025-05-05
#### FAIL 9 seconds
```
2025-05-05T00:30:02.8751834Z === RUN   TestMigGenericAuditing_basic
2025-05-05T00:30:02.8753391Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-9025238284088448262
2025-05-05T00:30:02.8776913Z    test_terraform_path=/home/runner/work/_temp/4523e18a-5365-4f47-9b16-a8fcfa63d406/terraform
2025-05-05T00:30:02.8778424Z     resource_auditing_migration_test.go:20: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-05-05T00:30:02.8779238Z         stdout:
2025-05-05T00:30:02.8779617Z         
2025-05-05T00:30:02.8802916Z         Terraform used the selected providers to generate the following execution
2025-05-05T00:30:02.8803649Z         plan. Resource actions are indicated with the following symbols:
2025-05-05T00:30:02.8804142Z           ~ update in-place
2025-05-05T00:30:02.8804545Z          <= read (data resources)
2025-05-05T00:30:02.8804970Z         
2025-05-05T00:30:02.8805488Z         Terraform will perform the following actions:
2025-05-05T00:30:02.8806182Z         
2025-05-05T00:30:02.8806770Z           # data.mongodbatlas_auditing.test will be read during apply
2025-05-05T00:30:02.8807528Z           # (depends on a resource or a module with changes pending)
2025-05-05T00:30:02.8808321Z          <= data "mongodbatlas_auditing" "test" {
2025-05-05T00:30:02.8809105Z               + audit_authorization_success = (known after apply)
2025-05-05T00:30:02.8809906Z               + audit_filter                = (known after apply)
2025-05-05T00:30:02.8810639Z               + configuration_type          = (known after apply)
2025-05-05T00:30:02.8811389Z               + enabled                     = (known after apply)
2025-05-05T00:30:02.8812057Z               + id                          = (known after apply)
2025-05-05T00:30:02.8812731Z               + project_id                  = "6818067d815eb7429e02a82b"
2025-05-05T00:30:02.8813165Z             }
2025-05-05T00:30:02.8813480Z         
2025-05-05T00:30:02.8813999Z           # mongodbatlas_auditing.test will be updated in-place
2025-05-05T00:30:02.8814636Z           ~ resource "mongodbatlas_auditing" "test" {
2025-05-05T00:30:02.8815251Z               ~ audit_filter                = <<-EOT
2025-05-05T00:30:02.8816388Z                     { 'atype': 'authenticate', 'param': {   'user': 'auditAdmin',   'db': 'admin',   'mechanism': 'SCRAM-SHA-1' }}
2025-05-05T00:30:02.8817035Z                 EOT
2025-05-05T00:30:02.8818029Z                 id                          = "6818067d815eb7429e02a82b"
2025-05-05T00:30:02.8818710Z                 # (4 unchanged attributes hidden)
2025-05-05T00:30:02.8819114Z             }
2025-05-05T00:30:02.8819438Z         
2025-05-05T00:30:02.8819886Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-05-05T00:30:02.8820384Z --- FAIL: TestMigGenericAuditing_basic (9.54s)
```
### 2025-05-06
#### PASS 8 seconds
### 2025-05-07
#### PASS 9 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 10 seconds
### 2025-05-10
#### PASS 11 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:49.3542559Z === RUN   TestMigGenericAuditing_basic
2025-05-11T00:29:49.3544002Z     resource_auditing_migration_test.go:14: Creating execution project: test-acc-tf-p-7100172099539844461
2025-05-11T00:29:49.3546040Z     resource_auditing_migration_test.go:14: 
2025-05-11T00:29:49.3547721Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:49.3550960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:49.3554369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_migration_test.go:14
2025-05-11T00:29:49.3555907Z         	Error:      	Received unexpected error:
2025-05-11T00:29:49.3557486Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.3558834Z         	Test:       	TestMigGenericAuditing_basic
2025-05-11T00:29:49.3560647Z         	Messages:   	Project creation failed: test-acc-tf-p-7100172099539844461, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.3562006Z --- FAIL: TestMigGenericAuditing_basic (0.30s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-14
#### PASS 11 seconds
### 2025-05-15
#### PASS 9 seconds
### 2025-05-16
#### PASS 8 seconds
### 2025-05-17
#### PASS 6 seconds
### 2025-05-18
#### PASS 11 seconds
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 10 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 10 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 10 seconds
### 2025-05-25
#### PASS 8 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-28
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-29
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-05-30
#### PASS 10 seconds
### 2025-05-31
#### PASS 10 seconds
### 2025-06-01
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 12 seconds
#### PASS 9 seconds
#### PASS 14 seconds
### 2025-06-03
#### PASS 10 seconds
### 2025-06-04
#### PASS 11 seconds
### 2025-06-05
#### PASS 8 seconds
### 2025-06-06
#### PASS 8 seconds
### 2025-06-07
#### PASS 7 seconds
### 2025-06-08
#### PASS 11 seconds
### 2025-06-09
#### PASS 9 seconds
### 2025-06-10
#### PASS 9 seconds
### 2025-06-11
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-06-12
#### PASS 8 seconds
### 2025-06-13
#### PASS 11 seconds
### 2025-06-14
#### PASS 7 seconds
### 2025-06-15
#### PASS 6 seconds
### 2025-06-16
#### PASS 9 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 8 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 9 seconds
### 2025-06-21
#### PASS 10 seconds
### 2025-06-22
#### PASS 6 seconds
### 2025-06-23
#### PASS 8 seconds
### 2025-06-24
#### PASS 8 seconds
### 2025-06-25
#### PASS 8 seconds
### 2025-06-26
#### PASS 9 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### PASS 10 seconds
### 2025-06-30
#### PASS 10 seconds
### 2025-07-01
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 7 seconds
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 7 seconds
### 2025-07-06
#### PASS 9 seconds
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 10 seconds
### 2025-07-09
#### PASS 7 seconds