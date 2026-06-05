# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:59](#error-2026-05-09t0059140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.06s
[2026-05-12 00:56](#error-2026-05-12t0056590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.09s
[2026-05-14 01:02](#error-2026-05-14t0102530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-05-26 02:12](#error-2026-05-26t0212160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.02s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.08s
[2026-06-02 01:11](#error-2026-06-02t0111090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 58 seconds
  - PASS 57 seconds
- 2026-05-08 PASS 41 seconds
- 2026-05-09

### Error 2026-05-09T00:59:14+00:00
```
2026-05-09T00:59:14.3978675Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-09T00:59:14.3980617Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-09T00:59:14.4009515Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-09T00:59:14.4010244Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:59:14.4010747Z         
2026-05-09T00:59:14.4011359Z         Error: error creating project: test-acc-tf-p-4577506353077940074
2026-05-09T00:59:14.4011868Z         
2026-05-09T00:59:14.4012253Z           with mongodbatlas_project.test,
2026-05-09T00:59:14.4013042Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-09T00:59:14.4013906Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:59:14.4014289Z         
2026-05-09T00:59:14.4014933Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:59:14.4015739Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:59:14.4016513Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.4017151Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (94.59s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 47 seconds
- 2026-05-12

### Error 2026-05-12T00:56:59+00:00
```
2026-05-12T00:56:59.9181629Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-12T00:56:59.9184704Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-12T00:56:59.9197769Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-12T00:56:59.9198298Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-05-12T00:56:59.9199039Z         
2026-05-12T00:56:59.9199459Z         Error: error creating project: test-acc-tf-p-8888935138654973053
2026-05-12T00:56:59.9199819Z         
2026-05-12T00:56:59.9200122Z           with mongodbatlas_project.test,
2026-05-12T00:56:59.9200718Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-12T00:56:59.9201287Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:56:59.9201589Z         
2026-05-12T00:56:59.9202048Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:56:59.9202682Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:56:59.9203270Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:56:59.9203737Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (68.86s)
```

- 2026-05-13 PASS 49 seconds
- 2026-05-14

### Error 2026-05-14T01:02:53+00:00
```
2026-05-14T01:02:53.8569285Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-14T01:02:53.8572619Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-14T01:02:53.8588258Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-14T01:02:53.8589019Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-05-14T01:02:53.8589445Z         
2026-05-14T01:02:53.8590040Z         Error: error creating project: test-acc-tf-p-7767858149419828719
2026-05-14T01:02:53.8590434Z         
2026-05-14T01:02:53.8590780Z           with mongodbatlas_project.test,
2026-05-14T01:02:53.8591528Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-14T01:02:53.8592294Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:02:53.8592618Z         
2026-05-14T01:02:53.8593366Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:02:53.8594097Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:02:53.8594861Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:02:53.8595368Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (63.36s)
```

- 2026-05-15 PASS 46 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 46 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 49 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7181135Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-21T01:07:04.7183668Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-21T01:07:04.7213459Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-21T01:07:04.7214003Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:07:04.7214399Z         
2026-05-21T01:07:04.7214834Z         Error: error creating project: test-acc-tf-p-1019890591905319958
2026-05-21T01:07:04.7215202Z         
2026-05-21T01:07:04.7215515Z           with mongodbatlas_project.test,
2026-05-21T01:07:04.7216398Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-21T01:07:04.7217005Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:07:04.7217333Z         
2026-05-21T01:07:04.7217818Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:07:04.7218483Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:07:04.7219096Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7219581Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (70.63s)
```

- 2026-05-22 PASS 51 seconds
- 2026-05-23 PASS 58 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 49 seconds
- 2026-05-26

### Error 2026-05-26T02:12:16+00:00
```
2026-05-26T02:12:16.0368832Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-26T02:12:16.0373064Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-26T02:12:16.0427086Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-26T02:12:16.0428013Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-05-26T02:12:16.0428655Z         
2026-05-26T02:12:16.0429381Z         Error: error creating project: test-acc-tf-p-5842199403441008606
2026-05-26T02:12:16.0429989Z         
2026-05-26T02:12:16.0430504Z           with mongodbatlas_project.test,
2026-05-26T02:12:16.0431580Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-26T02:12:16.0432597Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:12:16.0433287Z         
2026-05-26T02:12:16.0434278Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:12:16.0435415Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:12:16.0436456Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:16.0437263Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (69.09s)
```

- 2026-05-27 PASS 49 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7582193Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-28T01:01:56.7584820Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-28T01:01:56.7661074Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-28T01:01:56.7661633Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:01:56.7662032Z         
2026-05-28T01:01:56.7662454Z         Error: error creating project: test-acc-tf-p-1847015651443104233
2026-05-28T01:01:56.7662826Z         
2026-05-28T01:01:56.7663139Z           with mongodbatlas_project.test,
2026-05-28T01:01:56.7663753Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:56.7664328Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:56.7664630Z         
2026-05-28T01:01:56.7665100Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:01:56.7665752Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:01:56.7666339Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7666820Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (75.22s)
```

- 2026-05-29 PASS 41 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0191545Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-30T01:08:14.0195257Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-30T01:08:14.0245245Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-05-30T01:08:14.0245829Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:08:14.0246252Z         
2026-05-30T01:08:14.0246708Z         Error: error creating project: test-acc-tf-p-5197440043134613300
2026-05-30T01:08:14.0247108Z         
2026-05-30T01:08:14.0247545Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0248196Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0248802Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0249132Z         
2026-05-30T01:08:14.0249640Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0250320Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0250943Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0251451Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (73.75s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 42 seconds
- 2026-06-02

### Error 2026-06-02T01:11:09+00:00
```
2026-06-02T01:11:09.5982023Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-06-02T01:11:09.5985179Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-06-02T01:11:09.6042210Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-06-02T01:11:09.6042674Z     resource_test.go:215: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:11:09.6043017Z         
2026-06-02T01:11:09.6043379Z         Error: error creating project: test-acc-tf-p-8494253366327494485
2026-06-02T01:11:09.6043688Z         
2026-06-02T01:11:09.6043960Z           with mongodbatlas_project.test,
2026-06-02T01:11:09.6044476Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-06-02T01:11:09.6044960Z           13: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:11:09.6045236Z         
2026-06-02T01:11:09.6045644Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:11:09.6046193Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:11:09.6046683Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:09.6047082Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (102.70s)
```

- 2026-06-03 PASS 49 seconds
- 2026-06-04 PASS 57 seconds
- 2026-06-05 PASS 48 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 45 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 44 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 46 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 41 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
