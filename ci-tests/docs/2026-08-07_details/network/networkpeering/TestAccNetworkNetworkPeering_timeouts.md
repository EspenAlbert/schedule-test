# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-07-18 00:49](#error-2026-07-18t0049410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.09s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1465207Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-07-09T00:58:29.1467203Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-07-09T00:58:29.1481250Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-07-09T00:58:29.1481998Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-09T00:58:29.1482562Z         
2026-07-09T00:58:29.1483024Z         Error: error creating project: test-acc-tf-p-8728563308838710414
2026-07-09T00:58:29.1483432Z         
2026-07-09T00:58:29.1483807Z           with mongodbatlas_project.my_project,
2026-07-09T00:58:29.1484529Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-09T00:58:29.1485700Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-09T00:58:29.1486079Z         
2026-07-09T00:58:29.1486613Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:29.1487332Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:29.1487969Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1488459Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (63.18s)
```

- 2026-07-10 PASS 2 minutes
- 2026-07-11 PASS 3 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 2 minutes
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS 2 minutes
- 2026-07-16 PASS 2 minutes
- 2026-07-17 PASS 2 minutes
- 2026-07-18

### Error 2026-07-18T00:49:41+00:00
```
2026-07-18T00:49:41.0937856Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-07-18T00:49:41.0939025Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-07-18T00:49:41.0968715Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-07-18T00:49:41.0969407Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-18T00:49:41.0969914Z         
2026-07-18T00:49:41.0970376Z         Error: error creating project: test-acc-tf-p-5832877437494165544
2026-07-18T00:49:41.0970764Z         
2026-07-18T00:49:41.0971137Z           with mongodbatlas_project.my_project,
2026-07-18T00:49:41.0972008Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-18T00:49:41.0972635Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-18T00:49:41.0973006Z         
2026-07-18T00:49:41.0973495Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:41.0974139Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:41.0974725Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:41.0975190Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (84.90s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.4967444Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-07-21T00:51:26.4968614Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-07-21T00:51:26.4982480Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-07-21T00:51:26.4983438Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-21T00:51:26.4984023Z         
2026-07-21T00:51:26.4984494Z         Error: error creating project: test-acc-tf-p-5752480854485237947
2026-07-21T00:51:26.4984910Z         
2026-07-21T00:51:26.4985282Z           with mongodbatlas_project.my_project,
2026-07-21T00:51:26.4985997Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-21T00:51:26.4986683Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-21T00:51:26.4987050Z         
2026-07-21T00:51:26.4987569Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:51:26.4988293Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:51:26.4988949Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4989466Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (63.37s)
```

- 2026-07-22 PASS 2 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2209817Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-07-23T00:53:54.2211142Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-07-23T00:53:54.2273843Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-07-23T00:53:54.2275047Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-23T00:53:54.2275956Z         
2026-07-23T00:53:54.2276571Z         Error: error creating project: test-acc-tf-p-7535482670722276581
2026-07-23T00:53:54.2277003Z         
2026-07-23T00:53:54.2277398Z           with mongodbatlas_project.my_project,
2026-07-23T00:53:54.2278132Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-23T00:53:54.2278818Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-23T00:53:54.2279197Z         
2026-07-23T00:53:54.2279748Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:53:54.2280503Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:53:54.2281215Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:53:54.2281909Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:53:54.2282608Z         BadRequestDetail: 
2026-07-23T00:53:54.2283462Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (1.11s)
```

- 2026-07-24 PASS 2 minutes
- 2026-07-25 PASS 2 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 minutes
- 2026-07-28 PASS 2 minutes
- 2026-07-29 PASS 2 minutes
- 2026-07-30 PASS 2 minutes
- 2026-07-31 PASS 2 minutes
- 2026-08-01 PASS 2 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 minutes
- 2026-08-04 PASS 2 minutes
- 2026-08-05 PASS 2 minutes
- 2026-08-06 PASS 2 minutes
- 2026-08-07 PASS 2 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
